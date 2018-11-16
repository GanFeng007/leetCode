// https://leetcode-cn.com/problems/sort-array-by-parity/
// 给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，后面跟 A 的所有奇数元素。
// 你可以返回满足此条件的任何数组作为答案。
// 示例：
// 输入：[3,1,2,4]
// 输出：[2,4,3,1]
// 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 
// 提示：
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var odd = []
    var even = []
    A.map(function(item){
      if(item%2===0){
        even.push(item)
      }else {
        odd.push(item)
      }
    })
    return even.concat(odd)
};
// 提交通过
console.log(sortArrayByParity([3,1,2,4]))