// https://leetcode-cn.com/problems/to-lower-case/
// 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

// 示例 1：

// 输入: "Hello"
// 输出: "hello"
// 示例 2：

// 输入: "here"
// 输出: "here"
// 示例 3：

// 输入: "LOVELY"
// 输出: "lovely"
// 解题思路一：构建大小写键值对，通过正则进行替换
/**
 * @param {string} str
 * @return {string}
 */
// var toLowerCase = function(str) {
//     var alphas = {
//         'A':'a','B':'b','C':'c','D':'d','E':'e','F':'f',
//         'H':'h','I':'i','J':'j','K':'k','L':'l','M':'m','N':'n',
//         'O':'o','P':'p','Q':'q','R':'r','S':'s','T':'t',
//         'U':'u','V':'v','W':'w','X':'x','Y':'y','Z':'z'
//     }
//     var patt=/[A-Z]/g;
//     var result=patt.exec(str);
//     while(result){
//         str = str.replace(new RegExp(result, 'g'), alphas[result])
//         result=patt.exec(str)
//     }
//     return str
// };
// 解题思路二：由于大写字母的Unicode范围为65到90，再加上32则为对应的小写字母的Unicode范围，再进行转换即可
var toLowerCase = function (str) {
  if (!str) return str
  var codes = []
  for (var index = 0; index < str.length; index++) {
    if (str[index].charCodeAt() >= 65 && str[index].charCodeAt() <= 90) {
      codes.push(str[index].charCodeAt() + 32)
    } else {
      codes.push(str[index].charCodeAt())
    }
  }
  return String.fromCharCode.apply(this,codes)
}
// 验证通过