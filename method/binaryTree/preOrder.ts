import BinaryTreeNode from '../../class/binaryTreeNodeClass'

/** 二叉树的前序遍历 */
export default function preOrder<T>(root: BinaryTreeNode<T>) {
  let array: T[] = []

  if (root !== null) {
    array.push(root.val)
    array.push(...preOrder(root.leftNode))
    array.push(...preOrder(root.rightNode))
  }

  return array
}
