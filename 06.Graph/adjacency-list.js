// node adjacency-list.js
class Graph {
	constructor(noOfVertices) {
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}

	addVertex(v) {
		this.AdjList.set(v, []);
	}

	addEdge(v, w) {
		this.AdjList.get(v).push(w);
		// undirected
		this.AdjList.get(w).push(v);
	}

	printGraph() {
		let get_keys = this.AdjList.keys();

		for (let i of get_keys) {
			let get_values = this.AdjList.get(i);
			let conc = '';

			for (let j of get_values) {
				conc += j + ' ';
			}

			console.log(i + ' -> ' + conc);
		}
	}
}

var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
