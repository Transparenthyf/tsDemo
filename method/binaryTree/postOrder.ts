import BinaryTreeNode from '../../class/binaryTreeNodeClass'

/** 二叉树的后序遍历 */
export default function postOrder<T>(root: BinaryTreeNode<T>) {
  let array: T[] = []

  if (root !== null) {
    array.push(...postOrder(root.leftNode))
    array.push(...postOrder(root.rightNode))
    array.push(root.val)
  }

  return array
}
