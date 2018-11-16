// 15.三数之和
// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
// 解题思路
// 1、将所有可能的三元组合放入数组中形成一个临时的二维数组
// 2、在临时的二维数组中进行条件判断满足a+b+c=0并且在threeSum中不存在重复的，则插入threeSum
// 3、最后判断3个0的情况，返回threeSum
// threeSum相关的代码都存在运行超时的情况，待优化
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var len = nums.length
  if (len < 3) return []
  var result = []
  var zero = 0
  // 三重for循环生成临时二维数组
  for (var one = 0; one < len; one++) {
    for (var two = one + 1; two < len; two++) {
      for (var three = two + 1; three < len; three++) {
        var temp = []
        temp.push(nums[one])
        temp.push(nums[two])
        temp.push(nums[three])
        result.push(temp)
      }
    }
  }
  var threeSums = []
  for (var index = 0; index < result.length; index++) {
    var item = result[index]
    // 进行满足条件判断是否满足a+b+c=0
    if (item[0] + item[1] + item[2] === 0) {
      // 3个都为0进行记录
      if (item[0] === item[1] && item[1] === item[2]) {
        zero++
        continue
      }
      var flag = true
      // 查重判断
      for (var subIndex = 0; subIndex < threeSums.length; subIndex++) {
        if (threeSums[subIndex].includes(item[0]) &&
          threeSums[subIndex].includes(item[1]) &&
          threeSums[subIndex].includes(item[2])) {
          flag = false
          break
        }
      }
      // 不存在重复值则插入
      if (flag) {
        threeSums.push(item)
      }
    }
  }
  // 0值结果判断
  if (zero) {
    threeSums.push([0, 0, 0])
  }
  return threeSums;
};
// 未通过
console.time('开始')
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]))
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]).length)
console.timeEnd('开始')