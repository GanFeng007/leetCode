// 15.三数之和
// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var len = nums.length
  if (len < 3) return []
  var result = []
  var zero = 0
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
    if (item[0] + item[1] + item[2] === 0) {
      if (item[0] === item[1] && item[1] === item[2]) {
        zero++
        continue
      }
      var flag = true
      for (var subIndex = 0; subIndex < threeSums.length; subIndex++) {
        if (threeSums[subIndex].includes(item[0]) &&
          threeSums[subIndex].includes(item[1]) &&
          threeSums[subIndex].includes(item[2])) {
          flag = false
          break
        }
      }
      if (flag) {
        threeSums.push(item)
      }
    }
  }
  if (zero) {
    threeSums.push([0, 0, 0])
  }
  return threeSums;
};
console.log(JSON.stringify(threeSum([-11,-3,-6,12,-15,-13,-7,-3,13,-2,-10,3,12,-12,6,-6,12,9,-2,-12,14,11,-4,11,-8,8,0,-12,4,-5,10,8,7,11,-3,7,5,-3,-11,3,11,-13,14,8,12,5,-12,10,-8,-7,5,-9,-11,-14,9,-12,1,-6,-8,-10,4,9,6,-3,-3,-12,11,9,1,8,-10,-3,2,-11,-10,-1,1,-15,-6,8,-7,6,6,-10,7,0,-7,-7,9,-8,-9,-9,-14,12,-5,-10,-15,-9,-15,-7,6,-10,5,-7,-14,3,8,2,3,9,-12,4,1,9,1,-15,-13,9,-14,11,9])))