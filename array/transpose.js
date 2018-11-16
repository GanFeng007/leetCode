// https://leetcode-cn.com/problems/transpose-matrix/
// 给定一个矩阵 A， 返回 A 的转置矩阵。
// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

// 示例 1：
// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]
// 示例 2：
// 输入：[[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]

// 提示：
// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// 转换矩阵即交换他们的下标~0,1变成1,0~0,2变成2,0~
var transpose = function (A) {
  var B = makeTwoArray(A.length, A[0].length)
  for (var i = 0, len = A.length; i < len; i++) {
    for (var j = 0, jLen = A[i].length; j < jLen; j++) {
      B[j][i] = A[i][j]
    }
  }
  return B
};
// 生成二维数组，并以0填充
var makeTwoArray = function (x, y) {
  var a = []
  for (var i = 0; i < y; i++) {
    var b = []
    for (var j = 0; j < x; j++) {
      b.push(0)
    }
    a.push(b)
  }
  return a
}
// 已通过
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))