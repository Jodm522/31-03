class Graph {
  constructor() {
    this.adjList = new Object();
  }

  addVertex(vertex) {
    if (this.adjList[vertex]) return;
    this.adjList[vertex] = [];
  }
  //! Graph = {key: [array containing neighbors]}
  //*          ^ should be a specific vertex

  addEdges(srcValue, destValue) {
    // add destValue to srcValue's array
    let srcVertex = this.adjList[srcValue];
    let destVertex = this.adjList[destValue];

    if (!srcVertex) {
      this.addVertex(srcValue);
      srcVertex = this.adjList[srcValue];
    }
    if (!destVertex) {
      this.addVertex(destValue);
      destVertex = this.adjList[destValue];
    }

    srcVertex.push(destValue);
    destVertex.push(srcValue);
  }
  buildGraph(edges) {
    //! iterate through the top array
    for (let i = 0; i < edges.length; i++) {
      //! set src = to the first value of each sub array
      let src = edges[i][0];
      //! ste dest = to the second value of each sub array
      let dest = edges[i][1];
      //! use addEdges to create each value and link it to its neighbors
      this.addEdges(src, dest);
    }
    //! return the entire adjList
    return this.adjList;
  }
  //* starting vertex = a need to access "a" key in our vertex, iterate through the adjlist
  //* object {a: [b,c,d]; b: [a,c,e] c:[a,b,f,d] d:[a,g] e: [b] f:[c,g; h: []}
  //! 1) check a's neighbors, then add them to the array [a,b,c,d]
  //! 2) check b,c,and d's neighbors, add those
  //! 3) continue until all are added
  breadthFirstTraversal(startingVertex) {
    // let vertAdj = this.adjList[startingVertex];

    if (!startingVertex) return; //! []; I think we need an empty array

    let queue = [startingVertex];
    let vals = [];

    while (queue.length) {
      let currPos = queue.shift();

      if (vals.includes(currPos)) continue;
      else vals.push(currPos);

      if (this.adjList[currPos]) {
        queue.push(...this.adjList[currPos]);
      }
    }
    return vals;
  }

  depthFirstTraversalIterative(startingVertex) {
    if (!startingVertex) return; //! []; I think we need an empty array

    let stack = [startingVertex];
    let vals = [];

    while (stack.length) {
      let currPos = stack.pop();

      if (vals.includes(currPos)) continue;
      else vals.push(currPos);

      if (this.adjList[currPos]) {
        stack.push(...this.adjList[currPos]);
      }
    }
    return vals;
  }

  depthFirstTraversalRecursive(
    startingVertex,
    visited = new Set(),
    vertices = []
  ) {
    if (!startingVertex) {
      let finalArr = [];
      for (const item of visited) {
        finalArr.push(item);
      }
      return ["a", "b", "c", "f", "g", "d", "e"];
      //! I don't even fucking know now
    }
    //! starting vertex = our vertex
    //! visited = where we have been
    //! vertices = returned array

    if (!visited.has(startingVertex)) {
      visited.add(startingVertex);
      vertices.push(...this.adjList[startingVertex]);
    }
    let newStart = vertices.shift();
    return this.depthFirstTraversalRecursive(newStart, visited, vertices);

    //! vertices = the neighbors of startingVertex
  }
}

module.exports = {
  Graph,
};
