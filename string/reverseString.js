// https://leetcode-cn.com/problems/reverse-string/submissions/
// 编写一个函数，其作用是将输入的字符串反转过来。
// 示例 1:
// 输入: "hello"
// 输出: "olleh"

// 示例 2:
// 输入: "A man, a plan, a canal: Panama"
// 输出: "amanaP :lanac a ,nalp a ,nam A"
// 解题思路：倒序输出即可
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var result = ''
    for(var index = s.length - 1; index > -1 ; index--){
      result += s[index]
    }
    return result
};
// 验证通过
console.log(reverseString('A man, a plan, a canal: Panama'))