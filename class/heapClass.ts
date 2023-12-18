import levelOrder from '../method/binaryTree/levelOrder'
import binaryTreeNode from './binaryTreeNodeClass'

/** 小顶堆 */
export default class Heap<T> {
  /** 堆的根节点 */
  private root: binaryTreeNode<T>

  /**
   * 小顶堆构造函数
   * @param val 根节点的值
   */
  constructor(val: T) {
    this.root = new binaryTreeNode(val)
  }

  /** 访问堆顶元素 */
  peek(): T {
    return this.root.val
  }

  /** 元素入堆 */
  push(val: T) {
    /** 查找队列 */
    let queue = [this.root]
    /** 插入元素 */
    let insertNode: binaryTreeNode<T>

    while (queue.length > 0) {
      let treeNode = queue.shift()

      // 检查左节点
      if (treeNode.leftNode === null) {
        // 找到空位
        insertNode = new binaryTreeNode(val, treeNode)
        treeNode.leftNode = insertNode
        break
      } else {
        queue.push(treeNode.leftNode)
      }

      // 检查右节点
      if (treeNode.rightNode === null) {
        // 找到空位
        insertNode = new binaryTreeNode(val, treeNode)
        treeNode.rightNode = insertNode
        break
      } else {
        queue.push(treeNode.rightNode)
      }
    }

    this.siftUp(insertNode)
  }

  /** 元素出堆 */
  pop(): T {
    /** 堆顶元素的值 */
    let val = this.root.val

    // 将第一个元素与最后一个元素交换位置
    this.exchangeElement(this.findBottomElement(), this.root)

    // 删除最后一个元素
    let bottomNode = this.findBottomElement()
    if (bottomNode.parentNode.leftNode === bottomNode) {
      bottomNode.parentNode.leftNode = null
    }
    if (bottomNode.parentNode.rightNode === bottomNode) {
      bottomNode.parentNode.rightNode = null
    }
    bottomNode.parentNode = null

    // 将第一个元素插入到合适的位置
    this.siftDown(this.root)

    return val
  }

  /** 层序遍历堆返回数组 */
  toArray(): T[] {
    return levelOrder(this.root)
  }

  /**
   * 交换两个元素
   * @param elementA A 元素
   * @param elementB B 元素
   */
  private exchangeElement(elementA: binaryTreeNode<T>, elementB: binaryTreeNode<T>) {
    let tmpVal = elementA.val
    elementA.val = elementB.val
    elementB.val = tmpVal
  }

  /**
   * 查找最底元素
   */
  private findBottomElement(): binaryTreeNode<T> {
    /** 堆底元素 */
    let bottomNode: binaryTreeNode<T>
    /** 查找队列 */
    let queue = [this.root]

    while (queue.length > 0) {
      let treeNode = queue.shift()

      // 检查左节点
      if (treeNode.leftNode !== null) {
        queue.push(treeNode.leftNode)
      }

      // 检查右节点
      if (treeNode.rightNode !== null) {
        queue.push(treeNode.rightNode)
      }

      if (queue.length === 0) {
        // 找到堆底元素
        bottomNode = treeNode
      }
    }

    return bottomNode
  }

  /**
   * 将元素向上移动到合适的位置
   * @param element 要移动的元素
   */
  private siftUp(element: binaryTreeNode<T>) {
    if (element.parentNode !== null) {
      if (element.val < element.parentNode.val) {
        this.exchangeElement(element, element.parentNode)
        this.siftUp(element.parentNode)
      }
    }
  }

  /**
   * 将元素向下移动到合适位置
   * @param element 要移动的元素
   */
  private siftDown(element: binaryTreeNode<T>) {
    let minNode = element
    if (element.leftNode !== null) {
      if (element.leftNode.val < minNode.val) {
        minNode = element.leftNode
      }
    }
    if (element.rightNode !== null) {
      if (element.rightNode.val < minNode.val) {
        minNode = element.rightNode
      }
    }
    if (minNode !== element) {
      this.exchangeElement(element, minNode)
      this.siftDown(minNode)
    }
  }
}
