// https://leetcode-cn.com/problems/unique-email-addresses/
// 每封电子邮件都由一个本地名称和一个域名组成，以 @ 符号分隔。
// 例如，在 alice@leetcode.com中， alice 是本地名称，而 leetcode.com 是域名。
// 除了小写字母，这些电子邮件还可能包含 ',' 或 '+'。
// 如果在电子邮件地址的本地名称部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名称中没有点的同一地址。例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com” 会转发到同一电子邮件地址。 （请注意，此规则不适用于域名。）
// 如果在本地名称中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件，例如 m.y+name@email.com 将转发到 my@email.com。 （同样，此规则不适用于域名。）
// 可以同时使用这两个规则。
// 给定电子邮件列表 emails，我们会向列表中的每个地址发送一封电子邮件。实际收到邮件的不同地址有多少？
 
// 示例：
// 输入：["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// 输出：2
// 解释：实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。

// 提示：
// 1 <= emails[i].length <= 100
// 1 <= emails.length <= 100
// 每封 emails[i] 都包含有且仅有一个 '@' 字符。
// 解题思路：过滤本地名称中的.和+这2个符合获取最终的本地名称，域名无过滤条件，组装成最终的邮件地址，插入不重复的数组中即可
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  var result = []
  for (var index = 0; index < emails.length; index++) {
    var temp = emails[index].split('@')
    var localname = temp[0].replace(/\./g,'').split('+')[0]
    var flag = result.find(function(item){
      return localname+'@'+temp[1] === item
    })
    if(!flag){
      result.push(localname+'@'+temp[1])
    }
  }
  return result.length
};
// 验证通过
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))