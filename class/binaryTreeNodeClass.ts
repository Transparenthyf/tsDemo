/** 二叉树节点类 */
export default class BinaryTreeNode<T> {
  val: T
  leftNode: BinaryTreeNode<T> | null
  rightNode: BinaryTreeNode<T> | null

  constructor(val: T, leftNode?: BinaryTreeNode<T> | null, rightNode?: BinaryTreeNode<T> | null) {
    this.val = val
    this.leftNode = leftNode === undefined ? null : leftNode
    this.rightNode = rightNode === undefined ? null : rightNode
  }
}
