class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let node of this.nodes) {
      node.adjacent.delete(vertex);
    }
  }

  depthFirstSearch(start) {
    const visited = new Set();
    const stack = [start];

    while (stack.length) {
      const current = stack.pop();
      if (!visited.has(current)) {
        visited.add(current);
        stack.push(...current.adjacent);
      }
    }

    return Array.from(visited, (node) => node.value);
  }

  breadthFirstSearch(start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length) {
      const current = queue.shift();
      if (!visited.has(current)) {
        visited.add(current);
        queue.push(...current.adjacent);
      }
    }

    return Array.from(visited, (node) => node.value);
  }
}

module.exports = { Graph, Node };
