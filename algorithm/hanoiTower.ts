/**
 * 汉诺塔算法
 * 给定三根柱子，记为 A、B 和 C，起始状态下，柱子 A 上套着圆盘，它们从上到下按照从小到大的顺序排列。
 * 把这些圆盘移到柱子 C 上，并保持它们的原有顺序不变。在移动圆盘的过程中，需要遵守以下规则。
 * 1、圆盘只能从一根柱子顶部拿出，从另一根柱子顶部放入。
 * 2、每次只能移动一个圆盘。
 * 3、小圆盘必须时刻位于大圆盘之上。
 */

/**
 * 汉诺塔算法
 * @param from 从哪个塔移动
 * @param cache 中转塔
 * @param to 要移动到哪个塔
 * @param num 移动多少个圆盘
 */
export default function hanoiTower(from: number[], cache: number[], to: number[], num?: number) {
  if (num === undefined) {
    num = from.length
  }

  if (num === 1) {
    move(from, to)
  } else {
    hanoiTower(from, to, cache, num - 1)
    move(from, to)
    hanoiTower(cache, from, to, num - 1)
  }
}

/**
 * 移动一个圆盘
 * @param from 从哪里移动
 * @param to 移动到哪里
 */
function move(from: number[], to: number[]) {
  to.push(from.pop())
}
