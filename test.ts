import BinaryTreeNode from './class/binaryTreeNodeClass'
import levelOrder from './method/binaryTree/levelOrder'
import preOrder from './method/binaryTree/preOrder'
import inOrder from './method/binaryTree/inOrder'
import postOrder from './method/binaryTree/postOrder'

let binaryTree = new BinaryTreeNode(0)
let binaryTree1 = new BinaryTreeNode(1)
let binaryTree2 = new BinaryTreeNode(2)
let binaryTree3 = new BinaryTreeNode(3)
let binaryTree4 = new BinaryTreeNode(4)
let binaryTree5 = new BinaryTreeNode(5)
let binaryTree6 = new BinaryTreeNode(6)

binaryTree.leftNode = binaryTree1
binaryTree.rightNode = binaryTree2
binaryTree1.leftNode = binaryTree3
binaryTree1.rightNode = binaryTree4
binaryTree2.leftNode = binaryTree5
binaryTree2.rightNode = binaryTree6

console.log(binaryTree)
console.log(levelOrder(binaryTree))
console.log(preOrder(binaryTree))
console.log(inOrder(binaryTree))
console.log(postOrder(binaryTree))
