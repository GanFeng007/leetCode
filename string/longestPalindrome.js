// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/** 
 * 解题思路：
 * 一个长度为len（len>=2）的数组array，若它存在回文子串，则可能有(len-1)*len/2 个回文子串brray
 * 从可能子串的两侧进行值比较，如果存在一个最大长度n的brray子串(n<= len），且满足
 * brray[0] == brray[n -1]，则该子串为回文最长子串
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var len = s.length;
  var result = '';
  while (len) {
    var strArray = getStrByLen(len, s);
    for (var index = 0, subLen = strArray.length; index < subLen; index++) {
      var o = strArray[index];
      var flag = false;
      for (j = 0, jLen = o.length; j < jLen / 2; j++) {
        if (o[j] != o[jLen - j - 1]) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        result = o;
        break;
      }
    }
    if (result) {
      break;
    }
    len--;
  }
  return result;
  // 获取该长度下的所有子串
  function getStrByLen(len, s) {
    var length = s.length;
    var n = length - len;
    var strArray = [];
    for (var index = 0; index <= n; index++) {
      strArray.push(s.substring(index, length - n + index));
    }
    return strArray;
  }
};
console.log(longestPalindrome('afa'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));