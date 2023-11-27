/**
 * 欧几里得算法（辗转相除计算最大公约数）
 * @param p 一个数字（较大）
 * @param q 一个数字（较小）
 * @returns 两个数字的最大公约数
 */

export default function gcd(p: number, q: number) {
  if (q == 0) {
    return p
  }
  let r: number = p % q
  return gcd(q, r)
}

/**
 * 思路
 * 因为 p > q
 * 则 p = nq + r
 * 若公因数 x 可以整除 q，则 x 可以整除 p 中的 nq 部分，还需 x 可以整除 r 就能得到 x 可以整除 p
 * 所以问题由求 p q 的公因数，转化为求 q r 的公因数
 *
 * 因为两个数的最大公因数 x 小于等于较小的那个数
 * 当较小的那个数可以整除较大的那个数时，较小的那个数为两数的最大公因数
 * 所以当两数相除余数为零时得到最大公因数（停止递归条件）
 */
