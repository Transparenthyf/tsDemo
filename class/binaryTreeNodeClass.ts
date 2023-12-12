/** 二叉树节点类 */
export default class BinaryTreeNode<T> {
  /** 节点值 */
  val: T
  /** 父节点 */
  parentNode: BinaryTreeNode<T> | null
  /** 左节点 */
  leftNode: BinaryTreeNode<T> | null
  /** 右节点 */
  rightNode: BinaryTreeNode<T> | null

  constructor(
    val: T,
    parentNode?: BinaryTreeNode<T> | null,
    leftNode?: BinaryTreeNode<T> | null,
    rightNode?: BinaryTreeNode<T> | null
  ) {
    this.val = val
    this.parentNode = parentNode === undefined ? null : parentNode
    this.leftNode = leftNode === undefined ? null : leftNode
    this.rightNode = rightNode === undefined ? null : rightNode
  }
}
