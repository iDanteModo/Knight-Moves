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
        this.adjacencyList.get(node2).add(node1); // remove this line for directed graph
    }
    createChessBoard() {
        for(let i = 0; i < 64; i++) {
            this.addNode(i);
        }
        // for(let j = 0; j < 63; j++) {
        //     this.addEdge(j, j+1);
        // }
        let exclude = []
        for( let k = 0; k < 64; k++) {
            // Rules for the first 2 rows 0, 8
            if(k + 17 < 64 && k % 8 === 0 && k < 9){
                this.addEdge(k, k + 10);
                this.addEdge(k, k + 17);
            }else if(k + 17 < 64 && k % 8 === 0 && k >8){
                this.addEdge(k, k + 10);
                this.addEdge(k, k + 17);
            }else if (k - 17 >= 0 && k % 8 === 0 && k > 8){
                this.addEdge(k, k - 6);
                this.addEdge(k, k - 15);
            }else if(k + 17 < 64 && k % 8 === 7 && k < 16) {
                this.addEdge(k, k + 6);
                this.addEdge(k ,k + 15);
            }else if (k + 17 < 64 && k % 8 === 7 && k > 16) {
                this.addEdge(k, k + 6);
                this.addEdge(k ,k + 15);
            }
            // if(k + 17 < 64 && k % 8 === 0) {
            //     this.addEdge(k, k + 17);
            //     this.addEdge(k, k + 10);
            // }else if( k + 17 < 64) {
            //     this.addEdge(k, k + 17);
            //     this.addEdge(k, k + 15);
            //     this.addEdge(k, k + 10);
            //     this.addEdge(k, k + 6);
            // }else if(k - 17 >= 0) {
            //     this.addEdge(k, k - 17);
            //     this.addEdge(k, k - 15);
            //     this.addEdge(k, k - 10);
            //     this.addEdge(k, k - 6);
            // }
            
        }
        // console.log(this.adjacencyList);
    }
    getNeighbours(node) {
        console.log(this.adjacencyList.get(node));
        return this.adjacencyList.get(node);
    }
    hasEdge(node1, node2) {
        return this.adjacencyList.get(node1).has(node2);
    }
}

// For the knight pattern from node i to i +17 ori i +15 or i +10 or i + 6 / i -17 or i - 15 or i - 10 or i - 6 

// function generateEdges(graph) {
//     for(let i = 0; i < 63; i++) {
//         graph.addEdge(i, i +1);
//     }
// }

const list = new Graph();
list.createChessBoard();
console.log(list);
// console.log(list);










// console.log(list.adjacencyList);
// console.log(list.adjacencyList.entries().next().value); // acess first item from map
// console.log([...list.adjacencyList.entries()][1]); // acess by index
// const secondSet = [...list.adjacencyList.entries()][1];
// const setValues = [...secondSet[1]];
// const showValue = setValues[0];
// console.log(setValues);
// console.log(showValue);
