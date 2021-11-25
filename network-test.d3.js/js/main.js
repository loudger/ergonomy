function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

//==============================================================================

let network_data = {
  nodes: [
    { id: 0, name: 'John Week'},
    { id: 1, name: 'John Week'},
    { id: 2, name: 'John Week'},
    { id: 3, name: 'John Week'},
    { id: 4, name: 'John Week'},
    { id: 5, name: 'John Week'},
    { id: 6, name: 'John Week'},
    { id: 7, name: 'John Week'},
    { id: 8, name: 'John Week'},
    { id: 9, name: 'John Week'},
    { id: 10, name: 'John Week'},
    { id: 11, name: 'John Week'},
    { id: 12, name: 'John Week'},
    { id: 13, name: 'John Week'},
    { id: 14, name: 'John Week'},
    { id: 15, name: 'John Week'},
    { id: 16, name: 'John Week'},
    { id: 17, name: 'John Week'},
    { id: 18, name: 'John Week'},
    { id: 19, name: 'John Week'},
  ],
  links: [
    { source: 0, target: 1},
    { source: 0, target: 2},
    { source: 0, target: 3},
    { source: 0, target: 4},
    { source: 0, target: 5},
    { source: 0, target: 8},
    { source: 0, target: 13},
    { source: 1, target: 6},
    { source: 1, target: 11},
    { source: 1, target: 16},
    { source: 1, target: 19},
    { source: 2, target: 10},
    { source: 2, target: 18},
    { source: 17, target: 2 },
    { source: 17, target: 4 },
    { source: 17, target: 7 },
    { source: 17, target: 9 },
    { source: 17, target: 14 },
    { source: 17, target: 12 },
    { source: 17, target: 15 },
  
  ]
}

//==============================================================================

function ForceGraph({
  nodes, // an iterable of node objects (typically [{id}, …])
  links // an iterable of link objects (typically [{source, target}, …])
}, {
  nodeId = d => d.id, // given d in nodes, returns a unique identifier (string)
  linkSource = ({source}) => source, // given d in links, returns a node identifier string
  linkTarget = ({target}) => target, // given d in links, returns a node identifier string
  nodeStrength,
  linkStrength,
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
  marked_nodes_count = 0,

  nodeFill = "black", // node stroke fill (if not using a group color encoding)
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  linkStroke = "#999", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  listDistance,
  textFill = "red",
  textFillOpacity = 1
} = {}) {
  // Compute values.
  const N = d3.map(nodes, nodeId).map(intern);
  const LS = d3.map(links, linkSource).map(intern);
  const LT = d3.map(links, linkTarget).map(intern);
  const W = typeof linkStrokeWidth !== "function" ? null : d3.map(links, linkStrokeWidth);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (_, i) => ({id: N[i]}));
  links = d3.map(links, (_, i) => ({source: LS[i], target: LT[i]}));

  
  function calc_radiuses_depends_on_links_count(){
    nodes.map((item, n) => {
      item.links_count = 0;
    })
    
  	links.map((item, n) => {
  		nodes.filter(_ => _['id'] == item.source)[0].links_count += 1;
  		nodes.filter(_ => _['id'] == item.target)[0].links_count += 1;
  	})
  }
  calc_radiuses_depends_on_links_count();


  function mark_random_nodes(nodes_count){
    if( nodes_count > nodes.length ){
      console.log("[ERROR] Array index out of bounds")
      return
    }

    random_indexes = []
    for(i = 0; i < nodes_count; i++){
      random_index = randomInteger(0, nodes.length - 1)
      if( random_indexes.includes(random_index) ){
        i -= 1;
      } else {
        random_indexes.push(random_index)
      }
    }
    console.log("random_indexes:", random_indexes);

    nodes.map((item, n) => {
      if( random_indexes.includes(n) ){
        item.mark = true;
      } else {
        item.mark = false;
      }
    })

    console.log("nodes:", nodes)
  }
  mark_random_nodes(marked_nodes_count);


  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);
  if (listDistance !== undefined) forceLink.distance(listDistance);

  const simulation = d3.forceSimulation(nodes)
      .force("link", forceLink)
      .force("charge", forceNode)
      .force("center",  d3.forceCenter().strength(0))
      .on("tick", ticked)
      .alphaDecay(0.0128);

  const svg = d3.select("#network").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const link = svg.append("g")
      .attr("stroke", linkStroke)
      .attr("stroke-opacity", linkStrokeOpacity)
      .attr("stroke-width", linkStrokeWidth) //typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
      .attr("stroke", nodeStroke)
      .attr("stroke-opacity", nodeStrokeOpacity)
      .attr("stroke-width", nodeStrokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", nodeRadius)
      .attr("fill", nodeFill)
      .call(drag(simulation))

  const text = svg.append("g")
      .attr("fill", textFill)
      .attr("fill-opacity", textFillOpacity)
    .selectAll("text")
    .data(nodes)
    .join("text")


  if (W) link.attr("stroke-width", ({index: i}) => W[i]);

  function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  function ticked() {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    text
      .attr("x", d => d.x - 4)
      .attr("y", d => d.y - 15)
      .text(d => d.id)
  }

  function drag(simulation) {    
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node());
}

//==============================================================================

chart = ForceGraph(network_data, {
  nodeId: d => d.id,
  nodeStrength: -50, //default -30
  width: 1000,
  height: 550,
  marked_nodes_count: 6,

  nodeStrokeWidth: 2, // node stroke width, in pixels
  nodeStrokeOpacity: 1, // node stroke opacity
  nodeRadius: d => 2*Math.log(10*d.links_count), // node radius, in pixels
  nodeFill: d => d.mark ? "red" : "blue", //"currentColor", // node stroke fill (if not using a group color encoding)
  linkStroke: "#999", // link stroke color
  linkStrokeOpacity: 0.6, // link stroke opacity
  linkStrokeWidth: l => 1,
  listDistance: 70,
  textFill: "black",
  textFillOpacity: 0.5
})
