class Graph {
    adjacencyList;
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
        this.adjacencyList.set(node, new Set());
    }
    addEdge(node1, node2) {
        this.adjacencyList.get(node1).add(node2);
        this.adjacencyList.get(node2).add(node1);
    }
    createChessBoard() {
        for(let i = 0; i < 64; i++) {
            this.addNode(i);
        }
        console.log(this.adjacencyList);
    }
    getNeighbours(node) {
        console.log(this.adjacencyList.get(node));
        return this.adjacencyList.get(node);
    }
    hasEdge(node1, node2) {
        return this.adjacencyList.get(node1).has(node2);
    }
}

const list = new Graph();
list.createChessBoard();
list.addEdge(1,2);
list.addEdge(1,4);
list.getNeighbours(1);
// console.log(list);
// console.log(list.adjacencyList);
// console.log(list.adjacencyList.entries().next().value); // acess first item from map
// console.log([...list.adjacencyList.entries()][1]); // acess by index
// const secondSet = [...list.adjacencyList.entries()][1];
// const setValues = [...secondSet[1]];
// const showValue = setValues[0];
// console.log(setValues);
// console.log(showValue);
