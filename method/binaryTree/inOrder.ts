import BinaryTreeNode from '../../class/binaryTreeNodeClass'

/** 二叉树的中序遍历 */
export default function inOrder<T>(root: BinaryTreeNode<T>) {
  let array: T[] = []

  if (root !== null) {
    array.push(...inOrder(root.leftNode))
    array.push(root.val)
    array.push(...inOrder(root.rightNode))
  }

  return array
}
