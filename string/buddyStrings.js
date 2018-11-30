// https://leetcode-cn.com/problems/buddy-strings/
// 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。
 
// 示例 1：
// 输入： A = "ab", B = "ba"
// 输出： true

// 示例 2：
// 输入： A = "ab", B = "ab"
// 输出： false

// 示例 3:
// 输入： A = "aa", B = "aa"
// 输出： true

// 示例 4：
// 输入： A = "aaaaaaabc", B = "aaaaaaacb"
// 输出： true

// 示例 5：
// 输入： A = "", B = "aa"
// 输出： false

// 提示：
// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A 和 B 仅由小写字母构成。
// 解题思路：首先判断2个字符串长度，不一致则返回false；
// 然后进行2个字符串比较，获取不同字符数量，当数量为
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if(A.length !== B.length) return false
  var counter = 0
  var nos = []
  var setStr = ''
  for(var index = 0 ,len = A.length; index < len; index++){
    // 存储不同字母的位置，并累计数量
      if(A[index] !== B[index]){
          counter++
          nos.push(index)
      }
      // 对A字符串进行排重存储
      if(setStr.indexOf(A[index]) === -1) setStr+=A[index]
  }
  // 当累计数量不同数量的字符为1或者大于2时，
  // 则无法通过交互获得相等的结果返回false
  if(counter > 2 || counter === 1){
      return false
  }
  // 当累计数量不同数量的字符为0，且A的字符串长度能被2整除，并且A的字符串长度不为2
  // 则可以通过交互获得相等的结果，返回true，例如A字符串：aaa，B字符串也为aaa，若字符串A为ab，B也为ab则结果为false
  if(counter === 0&&A.length % 2 ===0 && A.length !== 2){
      return true
  }
  if(setStr.length !== A.length) return true
  if(!nos.length) return false
  if(A[nos[0]] === B[nos[1]] && A[nos[1]] === B[nos[0]]){
      return true
  }
  return false 
}
// 解题思路待完善
// 验证通过