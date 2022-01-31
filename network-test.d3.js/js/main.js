function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

//==============================================================================

// let network_data = {
//   nodes: [
//     { id: 0, name: 'John Week'},
//     { id: 1, name: 'John Week'},
//     { id: 2, name: 'John Week'},
//     { id: 3, name: 'John Week'},
//     { id: 4, name: 'John Week'},
//     { id: 5, name: 'John Week'},
//     { id: 6, name: 'John Week'},
//     { id: 7, name: 'John Week'},
//     { id: 8, name: 'John Week'},
//     { id: 9, name: 'John Week'},
//     { id: 10, name: 'John Week'},
//     { id: 11, name: 'John Week'},
//     { id: 12, name: 'John Week'},
//     { id: 13, name: 'John Week'},
//     { id: 14, name: 'John Week'},
//     { id: 15, name: 'John Week'},
//     { id: 16, name: 'John Week'},
//     { id: 17, name: 'John Week'},
//     { id: 18, name: 'John Week'},
//     { id: 19, name: 'John Week'},
//     { id: 20, name: 'John Week'},
//     { id: 21, name: 'John Week'},
//     { id: 22, name: 'John Week'},
//     { id: 23, name: 'John Week'},
//     { id: 24, name: 'John Week'},
//     { id: 25, name: 'John Week'},
//     { id: 26, name: 'John Week'},
//     { id: 27, name: 'John Week'},
//     { id: 28, name: 'John Week'},
//     { id: 29, name: 'John Week'},
//     { id: 30, name: 'John Week'},
//     { id: 31, name: 'John Week'},
//     { id: 32, name: 'John Week'},
//     { id: 33, name: 'John Week'},
//     { id: 34, name: 'John Week'},
//     { id: 35, name: 'John Week'},
//     { id: 36, name: 'John Week'},
//     { id: 37, name: 'John Week'},
//     { id: 38, name: 'John Week'},
//     { id: 39, name: 'John Week'},
//     { id: 40, name: 'John Week'},
//     { id: 41, name: 'John Week'},
//     { id: 42, name: 'John Week'},
//     { id: 43, name: 'John Week'},
//     { id: 44, name: 'John Week'},
//     { id: 45, name: 'John Week'},
//     { id: 46, name: 'John Week'},
//     { id: 47, name: 'John Week'},
//     { id: 48, name: 'John Week'},
//     { id: 49, name: 'John Week'},
//   ],
//   links: [
//     { source: 0, target: 1},
//     { source: 0, target: 2},
//     { source: 0, target: 3},
//     { source: 0, target: 4},
//     { source: 0, target: 5},
//     { source: 0, target: 8},
//     { source: 0, target: 13},
//     { source: 1, target: 6},
//     { source: 1, target: 11},
//     { source: 1, target: 16},
//     { source: 1, target: 19},
//     { source: 2, target: 10},
//     { source: 2, target: 18},
//     { source: 17, target: 2 },
//     { source: 17, target: 4 },
//     { source: 17, target: 7 },
//     { source: 14, target: 9 },
//     { source: 17, target: 14 },
//     { source: 17, target: 12 },
//     { source: 17, target: 15 },
//     { source: 17, target: 20 },
//     { source: 2, target: 21 },
//     { source: 1, target: 22 },
//     { source: 2, target: 23 },
//     { source: 4, target: 24 },
//     { source: 1, target: 25 },
//     { source: 2, target: 26 },
//     { source: 2, target: 28 },
//     { source: 0, target: 27 },
//     { source: 1, target: 29 },
//     { source: 4, target: 30 },
//     { source: 17, target: 31 },
//     { source: 4, target: 32 },
//     { source: 4, target: 33 },
//     { source: 2, target: 34 },
//     { source: 4, target: 35 },
//     { source: 14, target: 36 },
//     { source: 14, target: 37 },
//     { source: 14, target: 38 },
//     { source: 14, target: 39 },
//     { source: 14, target: 40 },
//     { source: 14, target: 41 },
//     { source: 31, target: 42 },
//     { source: 31, target: 43 },
//     { source: 31, target: 44 },
//     { source: 31, target: 45 },
//     { source: 31, target: 46 },
//     { source: 31, target: 47 },
//     { source: 17, target: 48 },
//     { source: 17, target: 49 },
//   ]
// }



// let network_data = {
//   nodes: [
//     { id: 0, name: 'John Week'},
//     { id: 1, name: 'John Week'},
//     { id: 2, name: 'John Week'},
//     { id: 3, name: 'John Week'},
//     { id: 4, name: 'John Week'},
//     { id: 5, name: 'John Week'},
//     { id: 6, name: 'John Week'},
//     { id: 7, name: 'John Week'},
//     { id: 8, name: 'John Week'},
//     { id: 9, name: 'John Week'},
//     { id: 10, name: 'John Week'},
//     { id: 11, name: 'John Week'},
//     { id: 12, name: 'John Week'},
//     { id: 13, name: 'John Week'},
//     { id: 14, name: 'John Week'},
//     { id: 15, name: 'John Week'},
//     { id: 16, name: 'John Week'},
//     { id: 17, name: 'John Week'},
//     { id: 18, name: 'John Week'},
//     { id: 19, name: 'John Week'},
//     { id: 20, name: 'John Week'},
//     { id: 21, name: 'John Week'},
//     { id: 22, name: 'John Week'},
//     { id: 23, name: 'John Week'},
//     { id: 24, name: 'John Week'},
//     { id: 25, name: 'John Week'},
//     { id: 26, name: 'John Week'},
//     { id: 27, name: 'John Week'},
//     { id: 28, name: 'John Week'},
//     { id: 29, name: 'John Week'},
//     { id: 30, name: 'John Week'},
//     { id: 31, name: 'John Week'},
//     { id: 32, name: 'John Week'},
//     { id: 33, name: 'John Week'},
//     { id: 34, name: 'John Week'},
//     { id: 35, name: 'John Week'},
//     { id: 36, name: 'John Week'},
//     { id: 37, name: 'John Week'},
//     { id: 38, name: 'John Week'},
//     { id: 39, name: 'John Week'},
//     { id: 40, name: 'John Week'},
//     { id: 41, name: 'John Week'},
//     { id: 42, name: 'John Week'},
//     { id: 43, name: 'John Week'},
//     { id: 44, name: 'John Week'},
//     { id: 45, name: 'John Week'},
//     { id: 46, name: 'John Week'},
//     { id: 47, name: 'John Week'},
//     { id: 48, name: 'John Week'},
//     { id: 49, name: 'John Week'},
//   ],
//   links: [
//     { source: 0, target: 1},
//     { source: 1, target: 2},
//     { source: 1, target: 3},
//     { source: 1, target: 4},
//     { source: 0, target: 5},
//     { source: 1, target: 8},
//     { source: 0, target: 13},
//     { source: 2, target: 6},
//     { source: 1, target: 11},
//     { source: 6, target: 16},
//     { source: 1, target: 19},
//     { source: 6, target: 10},
//     { source: 6, target: 18},
//     { source: 17, target: 2 },
//     { source: 6, target: 4 },
//     { source: 17, target: 7 },
//     { source: 6, target: 9 },
//     { source: 17, target: 14 },
//     { source: 1, target: 12 },
//     { source: 17, target: 15 },
//     { source: 17, target: 20 },
//     { source: 6, target: 21 },
//     { source: 7, target: 22 },
//     { source: 7, target: 23 },
//     { source: 7, target: 24 },
//     { source: 7, target: 25 },
//     { source: 2, target: 26 },
//     { source: 7, target: 28 },
//     { source: 7, target: 27 },
//     { source: 7, target: 29 },
//     { source: 7, target: 30 },
//     { source: 17, target: 31 },
//     { source: 14, target: 32 },
//     { source: 7, target: 33 },
//     { source: 2, target: 34 },
//     { source: 7, target: 35 },
//     { source: 14, target: 36 },
//     { source: 7, target: 37 },
//     { source: 14, target: 38 },
//     { source: 7, target: 39 },
//     { source: 14, target: 40 },
//     { source: 14, target: 41 },
//     { source: 31, target: 42 },
//     { source: 31, target: 43 },
//     { source: 31, target: 44 },
//     { source: 31, target: 45 },
//     { source: 31, target: 46 },
//     { source: 31, target: 47 },
//     { source: 17, target: 48 },
//     { source: 17, target: 49 },
//     { source: 24, target: 46 },
//     { source: 37, target: 46 },
//     { source: 29, target: 46 },
//     { source: 23, target: 46 },
//   ]
// }



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
    { id: 20, name: 'John Week'},
    { id: 21, name: 'John Week'},
    { id: 22, name: 'John Week'},
    { id: 23, name: 'John Week'},
    { id: 24, name: 'John Week'},
    { id: 25, name: 'John Week'},
    { id: 26, name: 'John Week'},
    { id: 27, name: 'John Week'},
    { id: 28, name: 'John Week'},
    { id: 29, name: 'John Week'},
    { id: 30, name: 'John Week'},
    { id: 31, name: 'John Week'},
    { id: 32, name: 'John Week'},
    { id: 33, name: 'John Week'},
    { id: 34, name: 'John Week'},
    { id: 35, name: 'John Week'},
    { id: 36, name: 'John Week'},
    { id: 37, name: 'John Week'},
    { id: 38, name: 'John Week'},
    { id: 39, name: 'John Week'},
    { id: 40, name: 'John Week'},
    { id: 41, name: 'John Week'},
    { id: 42, name: 'John Week'},
    { id: 43, name: 'John Week'},
    { id: 44, name: 'John Week'},
    { id: 45, name: 'John Week'},
    { id: 46, name: 'John Week'},
    { id: 47, name: 'John Week'},
    { id: 48, name: 'John Week'},
    { id: 49, name: 'John Week'},
  ],
  links: [
    { source: 32, target: 1},
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
    { source: 14, target: 9 },
    { source: 17, target: 14 },
    { source: 17, target: 12 },
    { source: 17, target: 15 },
    { source: 17, target: 20 },
    { source: 2, target: 21 },
    { source: 1, target: 22 },
    { source: 2, target: 23 },
    { source: 4, target: 24 },
    { source: 1, target: 25 },
    { source: 2, target: 26 },
    { source: 2, target: 28 },
    { source: 0, target: 27 },
    { source: 1, target: 29 },
    { source: 4, target: 30 },
    { source: 17, target: 31 },
    { source: 4, target: 32 },
    { source: 4, target: 33 },
    { source: 2, target: 34 },
    { source: 4, target: 35 },
    { source: 14, target: 36 },
    { source: 14, target: 37 },
    { source: 14, target: 38 },
    { source: 14, target: 39 },
    { source: 14, target: 40 },
    { source: 14, target: 41 },
    { source: 31, target: 42 },
    { source: 31, target: 43 },
    { source: 31, target: 44 },
    { source: 31, target: 45 },
    { source: 31, target: 46 },
    { source: 31, target: 47 },
    { source: 17, target: 48 },
    { source: 17, target: 49 },
    { source: 2, target: 4 },
    { source: 5, target: 21 },
    { source: 24, target: 27 },
    { source: 31, target: 10 },
    { source: 14, target: 1 },
    { source: 14, target: 30 },
    { source: 33, target: 17 },
    { source: 33, target: 14 },
    { source: 35, target: 32 },
    { source: 35, target: 24 },
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
  markedNodesCount = 0,

  nodeFill = "black", // node stroke fill (if not using a group color encoding)
  nodeOpacity = 1,
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  linkStroke = "#999", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  linkDistance,
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
  mark_random_nodes(markedNodesCount);


  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);
  if (linkDistance !== undefined) forceLink.distance(linkDistance);

  const simulation = d3.forceSimulation(nodes)
      .force("link", forceLink)
      .force("charge", forceNode)
      .force("center",  d3.forceCenter().strength(0))
      .on("tick", ticked)
      .alphaDecay(0.0128);

  const svg = d3.select("#network").append("svg")
      .attr("overflow", "visible")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const link = svg.append("g")
      .attr("stroke", linkStroke)
      .attr("stroke-opacity", linkStrokeOpacity)
    .selectAll("line")
    .data(links)
    .join("line")
      .attr("stroke-width", linkStrokeWidth);


  const node = svg.append("g")
      .attr("stroke", nodeStroke)
      .attr("stroke-opacity", nodeStrokeOpacity)
      .attr("stroke-width", nodeStrokeWidth)
      .attr("fill-opacity", nodeOpacity)
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
      .attr("x", d => d.x - 5)
      .attr("y", d => d.y - 20)
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

function clear_network_area(){

  document.querySelector("#network").innerHTML = "";
  document.querySelector("#control_panel").reset();

}

function apply_settings(){

  document.querySelector("#network").innerHTML = "";

  markedNodesCount = document.querySelector("#marked_nodes_count_selector").value;
  nodeStrokeWidth = document.querySelector("#nodes_stroke_width_selector").value;
  nodeStrokeOpacity = document.querySelector("#nodes_stroke_opacity_selector").value;
  nodeStroke = document.querySelector("#nodes_stroke_color_selector").value;
  nodeOpacity = document.querySelector("#nodes_opacity_selector").value;
  nodeFillOriginal = document.querySelector("#node_color_selector").value;
  nodeFillMarked = document.querySelector("#marked_node_color_selector").value;
  linkStroke = document.querySelector("#link_stroke_color_selector").value;
  linkStrokeOpacity = document.querySelector("#link_stroke_opacity_selector").value;
  linkStrokeWidth = document.querySelector("#link_stroke_width_selector").value;
  linkDistance = document.querySelector("#link_distance_selector").value;
  textFill = document.querySelector("#text_color_selector").value;
  textFillOpacity = document.querySelector("#text_opacity_selector").value;


  chart = ForceGraph(network_data, {
    nodeId: d => d.id,
    nodeStrength: -70, //default -30
    // width: 1000,
    // height: 550,
    markedNodesCount: markedNodesCount,
  
    nodeStrokeWidth: nodeStrokeWidth, // node stroke width, in pixels
    nodeStrokeOpacity: nodeStrokeOpacity, // node stroke opacity
    nodeStroke: nodeStroke,
    nodeOpacity: nodeOpacity,
    nodeRadius: d => 4*Math.log(10*d.links_count), // node radius, in pixels
    nodeFill: d => d.mark ? nodeFillMarked : nodeFillOriginal, //"currentColor", // node stroke fill (if not using a group color encoding)
    linkStroke: linkStroke, // link stroke color
    linkStrokeOpacity: linkStrokeOpacity, // link stroke opacity
    linkStrokeWidth: linkStrokeWidth,
    linkDistance: linkDistance,
    textFill: textFill,
    textFillOpacity: textFillOpacity
  })

}


var IS_TIMER_RUN = false;
var ASYNC_TIMER;

document.querySelector("#timer_toggler").addEventListener("click", function(e){
  if(IS_TIMER_RUN){
    console.log('stop');

    clearInterval(ASYNC_TIMER)
    document.querySelector("#timer_toggler").value = "Запустить таймер"

    IS_TIMER_RUN = false;
  }else{
    console.log("go!");

    var start = Date.now();
    ASYNC_TIMER = setInterval(function() {
        var delta = Date.now() - start; // milliseconds elapsed since start
        // delta = Math.round10(delta / 1000, -1); // in seconds
        delta = (delta / 1000).toFixed(1); // in seconds
        // alternatively just show wall clock time:
        // output(new Date().toUTCString());
        // console.log(delta);
        document.querySelector("#timer_value").innerText = delta;
    }, 100); // update about every second

    document.querySelector("#timer_toggler").value = "Остановить таймер"

    IS_TIMER_RUN = true;
  }

})
