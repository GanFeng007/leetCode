// https://leetcode-cn.com/problems/longest-common-prefix/
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:
// 所有输入只包含小写字母 a-z 。
// 解题思路：通过对字符串数组中第一个字符串进行for循环递减匹配，查找是不是最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 获取到第一个字符串
  var firstStr = strs[0]
  if(!firstStr) return ''
  // 对第一个字符串进行for循环
  for(var index = 0, len = firstStr.length; index < len; index++){
      // 从最长依次到最短字符串
      var result = firstStr.substring(0,len-index)
      var reg = new RegExp("^"+result)
      // 通过filter判断是否都包含该字符串
      var resultStrs = strs.filter(function(item){
          return reg.test(item)
      })
      // 判断新生成的字符串数组和原来传入长度是否相同，相同则返回result，即结果
      if(resultStrs.length === strs.length){
          return result
      }
  }
  return ''
};
// 验证通过