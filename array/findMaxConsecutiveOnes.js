// 485. 最大连续1的个数
// 给定一个二进制数组， 计算其中最大连续 1 的个数。

// 示例：

// 输入：[1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

// 提示：

//     输入的数组只包含 0 和 1 。
//     输入数组的长度是正整数，且不超过 10,000。

// https://leetcode-cn.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解题思路：遇到为的就计数下，并比较当前的最大值，超过最大值则更新最大值，若遇到0，则重新计数
var findMaxConsecutiveOnes = function(nums) {
  var max = 0;
  var count = 0;
  for(var i = 0, len = nums.length;i < len; i++){
      if(nums[i]){
          count++;
          if(count > max){
            max = count;
          }
      }else {
          count = 0
      }
  }
  return max;
};