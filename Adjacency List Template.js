class Graph {
    adjacencyList;
    constructor() {
        this.adjacencyList = new Map();
    }
    // Undirected Weighted Graph
    // constructor() {
    //     this.adjacencyList = mew Map();
    // }
    addNode(node) {
        this.adjacencyList.set(node, new Set());
    }
    addEdge(node1, node2) {
        this.adjacencyList.get(node1).add(node2);
        this.adjacencyList.get(node2).add(node1); // remove this line for directed graph
    }
    // Undirected Weighted Graph
    // addEdge(node1, node2, weight){ 
    //     this.adjacencyList.get(node1).set(node2, weight); 
    //     this.adjacencyList.get(node2).set(node1, weight); 
    //   }
    getNeighbours(node) {
        return this.adjacencyList.get(node);
    }
    hasEdge(node) {
        return this.adjacencyList.get(node1).has(node2);
    }
}

const list = new Graph();
list.addNode(12);
list.addNode(13);
list.addEdge(12,13);
list.addNode(14);
list.addNode(15);
console.log(list);