import undirectedGraphClass from './class/undirectedGraphClass'

let myUndirectedGraph = new undirectedGraphClass(1)

myUndirectedGraph.insert(2)
myUndirectedGraph.insert(3)
myUndirectedGraph.insert(4)
myUndirectedGraph.insert(5)
myUndirectedGraph.insert(6)
myUndirectedGraph.insert(7)
myUndirectedGraph.link(1, 2)
myUndirectedGraph.link(2, 3)
myUndirectedGraph.link(4, 3)
myUndirectedGraph.link(2, 4)
myUndirectedGraph.link(2, 5)
myUndirectedGraph.link(2, 7)

console.log(myUndirectedGraph.getVertexEdges(2))
