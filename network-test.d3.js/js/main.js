var IS_TEXT_LAYERS_HIDDEN = true
var IS_TIMER_RUN = false;
var ASYNC_TIMER;
var MIN_WEIGHT = 1;
var MAX_WEIGHT = 20;

function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function randn_bm() {
  var u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

//==============================================================================

var network_data_1 = {
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
    { id: 0, source: 0, target: 1},
    { id: 1, source: 0, target: 2},
    { id: 2, source: 0, target: 3},
    { id: 3, source: 0, target: 4},
    { id: 4, source: 0, target: 5},
    { id: 5, source: 0, target: 8},
    { id: 6, source: 0, target: 13},
    { id: 7, source: 1, target: 6},
    { id: 8, source: 1, target: 11},
    { id: 9, source: 1, target: 16},
    { id: 10, source: 1, target: 19},
    { id: 11, source: 2, target: 10},
    { id: 12, source: 2, target: 18},
    { id: 13, source: 17, target: 2 },
    { id: 14, source: 17, target: 4 },
    { id: 15, source: 17, target: 7 },
    { id: 16, source: 14, target: 9 },
    { id: 17, source: 17, target: 14 },
    { id: 18, source: 17, target: 12 },
    { id: 19, source: 17, target: 15 },
    { id: 20, source: 17, target: 20 },
    { id: 21, source: 2, target: 21 },
    { id: 22, source: 1, target: 22 },
    { id: 23, source: 2, target: 23 },
    { id: 24, source: 4, target: 24 },
    { id: 25, source: 1, target: 25 },
    { id: 26, source: 2, target: 26 },
    { id: 27, source: 2, target: 28 },
    { id: 28, source: 0, target: 27 },
    { id: 29, source: 1, target: 29 },
    { id: 30, source: 4, target: 30 },
    { id: 31, source: 17, target: 31 },
    { id: 32, source: 4, target: 32 },
    { id: 33, source: 4, target: 33 },
    { id: 34, source: 2, target: 34 },
    { id: 35, source: 4, target: 35 },
    { id: 36, source: 14, target: 36 },
    { id: 37, source: 14, target: 37 },
    { id: 38, source: 14, target: 38 },
    { id: 39, source: 14, target: 39 },
    { id: 40, source: 14, target: 40 },
    { id: 41, source: 14, target: 41 },
    { id: 42, source: 31, target: 42 },
    { id: 43, source: 31, target: 43 },
    { id: 44, source: 31, target: 44 },
    { id: 45, source: 31, target: 45 },
    { id: 46, source: 31, target: 46 },
    { id: 47, source: 31, target: 47 },
    { id: 48, source: 17, target: 48 },
    { id: 49, source: 17, target: 49 },
  ]
}

var network_data_2 = {
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
    { id: 0, source: 0, target: 1},
    { id: 1, source: 1, target: 2},
    { id: 2, source: 1, target: 3},
    { id: 3, source: 1, target: 4},
    { id: 4, source: 0, target: 5},
    { id: 5, source: 1, target: 8},
    { id: 6, source: 0, target: 13},
    { id: 7, source: 2, target: 6},
    { id: 8, source: 1, target: 11},
    { id: 9, source: 6, target: 16},
    { id: 10, source: 1, target: 19},
    { id: 11, source: 6, target: 10},
    { id: 12, source: 6, target: 18},
    { id: 13, source: 17, target: 2 },
    { id: 14, source: 6, target: 4 },
    { id: 15, source: 17, target: 7 },
    { id: 16, source: 6, target: 9 },
    { id: 17, source: 17, target: 14 },
    { id: 18, source: 1, target: 12 },
    { id: 19, source: 17, target: 15 },
    { id: 20, source: 17, target: 20 },
    { id: 21, source: 6, target: 21 },
    { id: 22, source: 7, target: 22 },
    { id: 23, source: 7, target: 23 },
    { id: 24, source: 7, target: 24 },
    { id: 25, source: 7, target: 25 },
    { id: 26, source: 2, target: 26 },
    { id: 27, source: 7, target: 28 },
    { id: 28, source: 7, target: 27 },
    { id: 29, source: 7, target: 29 },
    { id: 30, source: 7, target: 30 },
    { id: 31, source: 17, target: 31 },
    { id: 32, source: 14, target: 32 },
    { id: 33, source: 7, target: 33 },
    { id: 34, source: 2, target: 34 },
    { id: 35, source: 7, target: 35 },
    { id: 36, source: 14, target: 36 },
    { id: 37, source: 7, target: 37 },
    { id: 38, source: 14, target: 38 },
    { id: 39, source: 7, target: 39 },
    { id: 40, source: 14, target: 40 },
    { id: 41, source: 14, target: 41 },
    { id: 42, source: 31, target: 42 },
    { id: 43, source: 31, target: 43 },
    { id: 44, source: 31, target: 44 },
    { id: 45, source: 31, target: 45 },
    { id: 46, source: 31, target: 46 },
    { id: 47, source: 31, target: 47 },
    { id: 48, source: 17, target: 48 },
    { id: 49, source: 17, target: 49 },
    { id: 50, source: 24, target: 46 },
    { id: 51, source: 37, target: 46 },
    { id: 52, source: 29, target: 46 },
    { id: 53, source: 23, target: 46 },
  ]
}

var network_data_3 = {
  nodes: [
    { id: 0,  name: 'John Week'},
    { id: 1,  name: 'John Week'},
    { id: 2,  name: 'John Week'},
    { id: 3,  name: 'John Week'},
    { id: 4,  name: 'John Week'},
    { id: 5,  name: 'John Week'},
    { id: 6,  name: 'John Week'},
    { id: 7,  name: 'John Week'},
    { id: 8,  name: 'John Week'},
    { id: 9,  name: 'John Week'},
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
    { id: 0, source: 32, target: 1},
    { id: 1, source: 0, target: 2},
    { id: 2, source: 0, target: 3},
    { id: 3, source: 0, target: 4},
    { id: 4, source: 0, target: 5},
    { id: 5, source: 0, target: 8},
    { id: 6, source: 0, target: 13},
    { id: 7, source: 1, target: 6},
    { id: 8, source: 1, target: 11},
    { id: 9, source: 1, target: 16},
    { id: 10, source: 1, target: 19},
    { id: 11, source: 2, target: 10},
    { id: 12, source: 2, target: 18},
    { id: 13, source: 17, target: 2 },
    { id: 14, source: 17, target: 4 },
    { id: 15, source: 17, target: 7 },
    { id: 16, source: 14, target: 9 },
    { id: 17, source: 17, target: 14 },
    { id: 18, source: 17, target: 12 },
    { id: 19, source: 17, target: 15 },
    { id: 20, source: 17, target: 20 },
    { id: 21, source: 2, target: 21 },
    { id: 22, source: 1, target: 22 },
    { id: 23, source: 2, target: 23 },
    { id: 24, source: 4, target: 24 },
    { id: 25, source: 1, target: 25 },
    { id: 26, source: 2, target: 26 },
    { id: 27, source: 2, target: 28 },
    { id: 28, source: 0, target: 27 },
    { id: 29, source: 1, target: 29 },
    { id: 30, source: 4, target: 30 },
    { id: 31, source: 17, target: 31 },
    { id: 32, source: 4, target: 32 },
    { id: 33, source: 4, target: 33 },
    { id: 34, source: 2, target: 34 },
    { id: 35, source: 4, target: 35 },
    { id: 36, source: 14, target: 36 },
    { id: 37, source: 14, target: 37 },
    { id: 38, source: 14, target: 38 },
    { id: 39, source: 14, target: 39 },
    { id: 40, source: 14, target: 40 },
    { id: 41, source: 14, target: 41 },
    { id: 42, source: 31, target: 42 },
    { id: 43, source: 31, target: 43 },
    { id: 44, source: 31, target: 44 },
    { id: 45, source: 31, target: 45 },
    { id: 46, source: 31, target: 46 },
    { id: 47, source: 31, target: 47 },
    { id: 48, source: 17, target: 48 },
    { id: 49, source: 17, target: 49 },
    { id: 50, source: 2, target: 4 },
    { id: 51, source: 5, target: 21 },
    { id: 52, source: 24, target: 27 },
    { id: 53, source: 31, target: 10 },
    { id: 54, source: 14, target: 1 },
    { id: 55, source: 14, target: 30 },
    { id: 56, source: 33, target: 17 },
    { id: 57, source: 33, target: 14 },
    { id: 58, source: 35, target: 32 },
    { id: 59, source: 35, target: 24 },
  ]
}

var network_data_graphs = [network_data_1, network_data_2, network_data_3]
var network_data = None

//==============================================================================

function ForceGraph({
  nodes, // an iterable of node objects (typically [{id}, …])
  links // an iterable of link objects (typically [{source, target}, …])
}, {
  nodeStrength,
  linkStrength,
  width = 640, // outer width, in pixels
  height = 220, // outer height, in pixels

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

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (item, i) => ({
    id: item.id,
    links_count: item.links_count,
    mark: item.mark
  }));

  links = d3.map(links, (item, i) => ({
    id: item.id,
    source: item.source, 
    target: item.target,
    weight: item.weight,
    mark: item.mark
  }));

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(d => d.id);
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
  .selectAll("line")
  .data(links)
  .join("line")
    .attr("stroke", linkStroke)
    .attr("stroke-opacity", linkStrokeOpacity)
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

  const node_text = svg.append("g")
    .attr("id", "node_text_layer")
    .attr("fill", textFill)
    .attr("fill-opacity", textFillOpacity)
  .selectAll("text")
  .data(nodes)
  .join("text")

  const link_text = svg.append("g")
    .attr("id", "link_text_layer")
    .attr("fill", textFill)
    .attr("fill-opacity", textFillOpacity)
  .selectAll("text")
  .data(links)
  .join("text");


  function ticked() {
    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    node_text
      .attr("x", d => d.x - 5)
      .attr("y", d => d.y - 20)
      .text(d => d.id + ":" + d.links_count);

    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
  
    link_text
      .attr("x", d => d.source.x + (d.target.x - d.source.x)/2)
      .attr("y", d => d.source.y + (d.target.y - d.source.y)/2)
      // .attr("x", d => d.x)
      // .attr("y", d => d.y)
      .text(d => d.id + ":" + d.weight);

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


function addTimer(){
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

}
addTimer()


function toggle_text_layers(){
  if(IS_TEXT_LAYERS_HIDDEN){
    document.querySelector("#node_text_layer").style.display = "";
    document.querySelector("#link_text_layer").style.display = "";
    document.querySelector("#text_layers_toggler").value = "Скрыть текст";
    IS_TEXT_LAYERS_HIDDEN = false;
  }else{
    document.querySelector("#node_text_layer").style.display = "none";
    document.querySelector("#link_text_layer").style.display = "none";
    document.querySelector("#text_layers_toggler").value = "Показать текст";
    IS_TEXT_LAYERS_HIDDEN = true;
  }
}


function generate_links_weights(){
  network_data.links.map((item, n) => {
    item.weight = randomInteger(MIN_WEIGHT, MAX_WEIGHT);
  })
}


function calc_links_count(){
  network_data.nodes.map((item, n) => {
    item.links_count = 0;
  })
  network_data.links.map((item, n) => {
    network_data.nodes.filter(_ => _['id'] == item.source)[0].links_count += 1;
    network_data.nodes.filter(_ => _['id'] == item.target)[0].links_count += 1;
  })
}


function mark_random_nodes(marked_nodes_count){
  if( marked_nodes_count > network_data.nodes.length ){
    console.log("[ERROR] Array index out of bounds")
    return
  }
  random_indexes = []
  for(i = 0; i < marked_nodes_count; i++){
    random_index = randomInteger(0, network_data.nodes.length - 1)
    if( random_indexes.includes(random_index) ){
      i -= 1;
    } else {
      random_indexes.push(random_index)
    }
  }
  // console.log("random_indexes:", random_indexes);
  network_data.nodes.map((item, n) => {
    if( random_indexes.includes(n) ){
      item.mark = true;
    } else {
      item.mark = false;
    }
  })
  // console.log("nodes:", network_data.nodes)
}


function mark_random_links(marked_links_count){
  if( marked_links_count > network_data.links.length ){
    console.log("[ERROR] Array index out of bounds")
    return
  }
  random_indexes = []
  for(i = 0; i < marked_links_count; i++){
    random_index = randomInteger(0, network_data.links.length - 1)
    if( random_indexes.includes(random_index) ){
      i -= 1;
    } else {
      random_indexes.push(random_index)
    }
  }
  // console.log("random_indexes:", random_indexes);
  network_data.links.map((item, n) => {
    if( random_indexes.includes(n) ){
      item.mark = true;
    } else {
      item.mark = false;
    }
  })
  // console.log("nodes:", network_data.nodes)
}


function apply_settings(){
  network_data = network_data_graphs[randomInteger(0, 2)]

  document.querySelector("#network").innerHTML = "";

  markedNodesCount = document.querySelector("#marked_nodes_count_selector").value;
  nodeStrokeWidth = document.querySelector("#nodes_stroke_width_selector").value;
  nodeStrokeOpacity = document.querySelector("#nodes_stroke_opacity_selector").value;
  nodeStroke = document.querySelector("#nodes_stroke_color_selector").value;
  nodeOpacity = document.querySelector("#nodes_opacity_selector").value;
  nodeFillOriginal = document.querySelector("#node_color_selector").value;
  nodeFillMarked = document.querySelector("#marked_node_color_selector").value;
  nodeRadiusCoefficient = document.querySelector("#nodes_radius_coefficient_selector").value;
  markedLinksCount = document.querySelector("#marked_links_count_selector").value;
  linkStrokeOriginal = document.querySelector("#link_stroke_color_selector").value;
  linkStrokeMarked = document.querySelector("#marked_links_color_selector").value;
  // linkStrokeOpacity = document.querySelector("#link_stroke_opacity_selector").value;
  linkOpacityCoefficient = document.querySelector("#link_stroke_opacity_coefficient_selector").value;
  linkStrokeWidth = document.querySelector("#link_stroke_width_selector").value;
  linkDistance = document.querySelector("#link_distance_selector").value;
  textFill = document.querySelector("#text_color_selector").value;
  textFillOpacity = document.querySelector("#text_opacity_selector").value;


  // addTimer();
  generate_links_weights();
  calc_links_count();
  mark_random_nodes(markedNodesCount);
  mark_random_links(markedLinksCount);

  chart = ForceGraph(network_data, {
    nodeStrength: -70, //default -30
    // width: 1000,
    // height: 550,
  
    nodeStrokeWidth: nodeStrokeWidth, // node stroke width, in pixels
    nodeStrokeOpacity: nodeStrokeOpacity, // node stroke opacity
    nodeStroke: nodeStroke,
    nodeOpacity: nodeOpacity,
    nodeRadius: d => 4*Math.log(nodeRadiusCoefficient*d.links_count), // node radius, in pixels
    // nodeRadius: d => 6*Math.sqrt(d.links_count), // node radius, in pixels
    nodeFill: d => d.mark ? nodeFillMarked : nodeFillOriginal, //"currentColor", // node stroke fill (if not using a group color encoding)
    linkStroke: d => d.mark ? linkStrokeMarked : linkStrokeOriginal, // link stroke color
    // linkStrokeOpacity: d => 0.1 + 9*d.weight/100, // link stroke opacity
    linkStrokeOpacity: d => 0.1 + 2*Math.atan(linkOpacityCoefficient * d.weight / MAX_WEIGHT)/Math.PI, // link stroke opacity
    // linkStrokeOpacity: linkStrokeOpacity, // link stroke opacity
    linkStrokeWidth: linkStrokeWidth,
    // linkStrokeWidth: d => d.weight,
    linkDistance: linkDistance,
    textFill: textFill,
    textFillOpacity: textFillOpacity
  })

  // addTimer();

  if(IS_TEXT_LAYERS_HIDDEN){
    document.querySelector("#node_text_layer").style.display = "none";
    document.querySelector("#link_text_layer").style.display = "none";
  }

}


