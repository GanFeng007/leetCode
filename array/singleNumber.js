// 题目描述 136.只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:
// 输入: [2,2,1]
// 输出: 1
// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4
/**
 * @param {number[]} nums
 * @return {number}
 */
/** 解法
 * 通过双重for循环查找出现一次的元素
 */
var singleNumber = function(nums) {
    var singleNumber
    var flag = false
    for(var index = 0; index < nums.length; index++){
      singleNumber = nums[index]
      for(var j = 0; j < nums.length; j++){
        if(singleNumber === nums[j] && index !== j){
          flag = true
          break
        }
      }
      if(flag){
        flag = false
      }else{
        break
      }
    }
    return singleNumber
};
console.log(singleNumber([4,2,1,2,1]))