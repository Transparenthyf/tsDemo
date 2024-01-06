import linkedListClass, { linkedListNodeClass } from './linkedListClass'

/** 无向图类 */
export default class undirectedGraphClass<T> {
  private undirectedGraph: linkedListClass<vertexClass<T>>

  constructor(val: T) {
    let tmpVertex = new vertexClass(val)
    this.undirectedGraph = new linkedListClass(tmpVertex)
  }

  /**
   * 插入顶点
   * @param val 顶点的值
   */
  insert(val: T) {
    if (this.findVertex(val) === null) {
      let tmpVertex = new vertexClass(val)
      this.undirectedGraph.insert(tmpVertex)
    } else {
      throw new Error('顶点已存在')
    }
  }

  /**
   * 连接两个顶点
   * @param valA 顶点 A 的值
   * @param valB 顶点 B 的值
   */
  link(valA: T, valB: T) {
    let vertexA: { val: { edge: T[] } } = this.findVertex(valA)
    let vertexB: { val: { edge: T[] } } = this.findVertex(valB)
    if (vertexA !== null && vertexB !== null) {
      if (vertexA.val.edge.indexOf(valB) === -1) {
        vertexA.val.edge.push(valB)
      }
      if (vertexB.val.edge.indexOf(valA) === -1) {
        vertexB.val.edge.push(valA)
      }
    } else {
      throw new Error('顶点不存在')
    }
  }

  /** 获取顶点数量 */
  getVertexCount(): number {
    return this.undirectedGraph.length()
  }

  /**
   * 获取顶点的边
   * @param val 顶点的值
   */
  getVertexEdges(val: T): [] {
    let vertex = this.findVertex(val)
    if (vertex === null) {
      throw new Error('未找到顶点')
    } else {
      return vertex.val.edge
    }
  }

  /**
   * 根据顶点值找到顶点
   * @param val 要查找的顶点的值
   * @return 顶点所在的链表节点
   */
  private findVertex(val: T): linkedListNodeClass<vertexClass<T>> | null {
    /** 目标节点 */
    let targetLinkedListNode: linkedListNodeClass<vertexClass<T>> | null = null
    let tmpLinkedListNode = this.undirectedGraph.root

    while (tmpLinkedListNode !== null && targetLinkedListNode === null) {
      let tmpVertex = tmpLinkedListNode.val
      if (tmpVertex.val === val) {
        targetLinkedListNode = tmpLinkedListNode
      }

      tmpLinkedListNode = tmpLinkedListNode.next
    }

    return targetLinkedListNode
  }
}

/** 图的顶点类 */
class vertexClass<T> {
  /** 顶点的值 */
  val: T
  /** 顶点的边 */
  edge: []
  constructor(val: T) {
    this.val = val
    this.edge = []
  }
}
