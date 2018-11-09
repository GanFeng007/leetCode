// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 示例:
// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [
    [1],
    [1, 1]
  ]
  if (numRows === 0) return []
  if (numRows === 1) return [
    [1]
  ]
  if (numRows === 2) return result
  for (var index = 2; index < numRows; index++) {
    result.push([])
    for (var subIndex = 0; subIndex < index + 1; subIndex++) {
      // 设置首尾的值为1
      if (subIndex === 0 || subIndex === index) {
        result[index][subIndex] = 1
      } else {
        // 中间的值则为上一层数组的相邻相加而得
        result[index][subIndex] = result[index - 1][subIndex - 1] + result[index - 1][subIndex]
      }
    }
  }
  return result
};
console.log(generate(6))