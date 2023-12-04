import BinaryTreeNode from '../../class/binaryTreeNodeClass'

/** 二叉树的层序遍历 */
export default function levelOrder<T>(root: BinaryTreeNode<T>) {
  let array: T[] = []
  /** 遍历队列 */
  let queue: BinaryTreeNode<T>[] = [root]

  while (queue.length > 0) {
    // 从队列中取出节点
    let node = queue.shift()
    // 记录当前节点值
    array.push(node.val)

    // 将子节点加入队列
    if (node.leftNode !== null) {
      queue.push(node.leftNode)
    }
    if (node.rightNode !== null) {
      queue.push(node.rightNode)
    }
  }

  return array
}
