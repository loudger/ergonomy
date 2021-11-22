function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

const svg = d3.select("#network")
	.append("svg")
		.attr('height', 600)
		.attr('width', 700)
	// .append("g")
		// .attr("stroke", "#ccc")
		// .attr("stroke-opacity", "1")
		// .attr("stroke-width", "1.5")


let network_data = {
	nodes: [
		{ id: 1, value: 10 },
		{ id: 2, value: 15 },
		{ id: 3, value: 10 },
		{ id: 4, value: 12 },
		{ id: 5, value: 10 },
		{ id: 6, value: 11 },
		{ id: 7, value: 8 }
	],
	links: [
		{ source: 1, target: 2 },
		{ source: 1, target: 4 },
		{ source: 2, target: 1 },
		{ source: 3, target: 6 },
		{ source: 6, target: 7 }
	]
}

network_data.nodes.map((item, n) => {
	item.x = randomInteger(0, 700)
	item.y = randomInteger(0, 600)
})

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
			.attr("r", item.value)
			.attr("cx", item.x)
			.attr("cy", item.y)
			.attr("fill", "steelblue")
	});

}

draw_network();
