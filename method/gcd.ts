/**
 * 欧几里得算法（辗转相除计算最大公约数）
 * @param p 一个数字
 * @param q 另一个数字
 * @returns 两个数字的最大公约数
 */

export default function gcd(p:number, q:number) {
  if (q == 0) {
    return p
  }
  let r:number = p % q
  return gcd(q, r)
}