function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

AREA_WIDTH = 900;
AREA_HEIGHT = 800;

const svg = d3.select("#network")
	.append("svg")
		.attr('height', AREA_HEIGHT)
		.attr('width', AREA_WIDTH)
	// .append("g")
		// .attr("stroke", "#ccc")
		// .attr("stroke-opacity", "1")
		// .attr("stroke-width", "1.5")


let network_data = {
	nodes: [
		{ id: 0, name: 'John Week', links_count: 0},
		{ id: 1, name: 'John Week', links_count: 0},
		{ id: 2, name: 'John Week', links_count: 0},
		{ id: 3, name: 'John Week', links_count: 0},
		{ id: 4, name: 'John Week', links_count: 0},
		{ id: 5, name: 'John Week', links_count: 0},
		{ id: 6, name: 'John Week', links_count: 0},
		{ id: 7, name: 'John Week', links_count: 0},
		{ id: 8, name: 'John Week', links_count: 0},
		{ id: 9, name: 'John Week', links_count: 0},
		{ id: 10, name: 'John Week', links_count: 0},
		{ id: 11, name: 'John Week', links_count: 0},
		{ id: 12, name: 'John Week', links_count: 0},
		{ id: 13, name: 'John Week', links_count: 0},
		{ id: 14, name: 'John Week', links_count: 0},
	],
	links: [
		{ source: 0, target: 5 },
		{ source: 1, target: 4 },
		{ source: 2, target: 4 },
		{ source: 3, target: 6 },
		{ source: 5, target: 2 },
		{ source: 5, target: 6 },
		{ source: 5, target: 8 },
		{ source: 6, target: 1 },
		{ source: 7, target: 9 },
		{ source: 9, target: 4 },
		{ source: 11, target: 4 },
		{ source: 11, target: 9 },
		{ source: 12, target: 9 },
		{ source: 13, target: 5 },
		{ source: 14, target: 7 },
	]
}

console.log(network_data.nodes)

function calc_radiuses_depends_on_links_count(){
	network_data.links.map((item, n) => {
		network_data.nodes.filter(_ => _['id'] == item.source)[0].links_count += 1;
		network_data.nodes.filter(_ => _['id'] == item.target)[0].links_count += 1;
	})
}
calc_radiuses_depends_on_links_count();





function sort_nodes_by_links_count(nodes){
	return nodes.sort(function(i, j){
		if( i.links_count <= j.links_count ) return 1;
		else if ( i.links_count >= j.links_count ) return -1;
		else return 0;
	})
}
sorted_nodes = sort_nodes_by_links_count(network_data.nodes.slice())
console.log(sorted_nodes)





MIN_LINKED = 20;
MAX_LINKED = 70;
MIN_UNLINKED = 1200;
MAX_UNLINKED = 1400;

function calc_positions(){
	sorted_nodes.map((item, n) => {

		console.log(item.id, item.x, item.y);
		if( item.x == null ){
			network_data.nodes[item.id].x = randomInteger(100, AREA_WIDTH - 100)
			network_data.nodes[item.id].y = randomInteger(100, AREA_HEIGHT - 100)
		}

		linked_nodes = []

		// Получаем список id'шников тех узлов, для которых текущий - source
		network_data.links.filter(_ => _["source"] == item.id).map((_item, _n) => {
			linked_nodes.push(_item.target)
		})

		// Получаем список id'шников тех узлов, для которых текущий - target
		network_data.links.filter(_ => _["target"] == item.id).map((_item, _n) => {
			linked_nodes.push(_item.source)
		})

		console.log(linked_nodes)

		// Для всех связанных узлов сгенерировать координаты
		linked_nodes.map((_item, _n) => {
			if(network_data.nodes[_item].x == null){

				let tmp_x = -1;
				let tmp_y = -1;
				let final_x = -1;
				let final_y = -1;

				do {
					tmp_x = randomInteger(MIN_LINKED, MAX_LINKED)
					if(randomInteger(0,1) == 0) tmp_x = -tmp_x
					final_x = item.x + tmp_x
					console.log(final_x)

					tmp_l = MAX_LINKED
					// tmp_l = randomInteger(MIN_LINKED, MAX_LINKED)

					tmp_y = Math.sqrt( Math.abs( Math.pow(tmp_l, 2) - Math.pow(tmp_x, 2) ) )
					if(randomInteger(0,1) == 0) tmp_y = -tmp_y
					final_y = item.y + tmp_y
				} while (  ( final_x < 0 ) || ( final_x > AREA_WIDTH) ||
				 ( final_y < 0 ) || ( final_y > AREA_HEIGHT) )

					network_data.nodes[_item].x = final_x
					network_data.nodes[_item].y = final_y
			}
		})

	})
}
calc_positions()



function draw_network(){

	network_data.links.map((item, n) => {
		svg.append("line")
			.attr("x1", network_data.nodes.filter(
				_ => _["id"] == item.source)[0].x)
			.attr("y1", network_data.nodes.filter(
				_ => _["id"] == item.source)[0].y)
			.attr("x2", network_data.nodes.filter(
				_ => _["id"] == item.target)[0].x)
			.attr("y2", network_data.nodes.filter(
				_ => _["id"] == item.target)[0].y)
			.attr("stroke", "black")
	});

	network_data.nodes.map((item, n) => {
		svg.append("circle")
				.attr("r", Math.log(15)*(item.links_count+1))
				.attr("cx", item.x)
				.attr("cy", item.y)
				.attr("fill", "steelblue")
		svg.append("text")
				.attr("x", item.x - 10)
				.attr("y", item.y - 10)
				// .text('(' + item.id + ')' + item.name)
				.text(item.id)
	});

}

draw_network();
