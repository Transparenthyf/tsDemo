import BinaryTreeNode from './binaryTreeNodeClass'

/** AVL 树 */
export default class AVLTreeClass<T> {
  root: AVLTreeNodeClass<T>
  constructor(val: T, leftNode?: BinaryTreeNode<T> | null, rightNode?: BinaryTreeNode<T> | null) {
    this.root = new AVLTreeNodeClass(val, 0, leftNode, rightNode)
  }

  insertNode(val: T) {}

  deleteNode(val: T) {}
}

/** AVL 树节点类 */
class AVLTreeNodeClass<T> extends BinaryTreeNode<T> {
  height: number
  constructor(val: T, height: number, leftNode?: BinaryTreeNode<T> | null, rightNode?: BinaryTreeNode<T> | null) {
    super(val, leftNode, rightNode)

    this.height = height
  }
}

export function binaryTreeNodeHeight<T>(binaryTreeNode: AVLTreeNodeClass<T>): number {
  return binaryTreeNode === null ? -1 : binaryTreeNode.height
}
