import heapClass from './class/heapClass'
import binaryTreeNodeClass from './class/binaryTreeNodeClass'

let heap = new heapClass(5)

heap.push(6)
heap.push(1)
heap.push(3)
console.log(heap)
console.log(heap.peek())
heap.pop()
console.log(heap)
console.log(heap.peek())
