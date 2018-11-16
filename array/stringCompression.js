// 给定一组字符，使用原地算法将其压缩。
// 压缩后的长度必须始终小于或等于原数组长度。
// 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。
// 在完成原地修改输入数组后，返回数组的新长度。

// 进阶：
// 你能否仅使用O(1) 空间解决问题？

// 示例 1：
// 输入：
// ["a","a","b","b","c","c","c"]

// 输出：
// 返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

// 说明：
// "aa"被"a2"替代。"bb"被"b2"替代。"ccc"被"c3"替代。
// 示例 2：

// 输入：
// ["a"]

// 输出：
// 返回1，输入数组的前1个字符应该是：["a"]

// 说明：
// 没有任何字符串被替代。
// 示例 3：

// 输入：
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

// 输出：
// 返回4，输入数组的前4个字符应该是：["a","b","1","2"]。
// 说明：
// 由于字符"a"不重复，所以不会被压缩。"bbbbbbbbbbbb"被“b12”替代。
// 注意每个数字在数组中都有它自己的位置。
// 注意：
// 所有字符都有一个ASCII值在[35, 126]区间内。
// 1 <= len(chars) <= 1000。
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  for (var index = 0; index < chars.length;) {
    var item = chars[index]
    var count = 1
    for (var subIndex = index + 1; subIndex < chars.length; subIndex++) {
      // 判断是否有相同的字符
      if (item === chars[subIndex]) {
        count++
      } else {
        break
      }
    }
    // 当count > 1说明，挨着的地方存在联系相同的字符
    if (count > 1) {
      var temp = count + ''
      chars.splice(index+1, count-1, ...temp.split(''))
      // 这里根据count的length再加一进行下一次判断
      index = index + temp.split('').length + 1
    }else {
      index++
    }
  } 
  return chars.length
};
console.log(compress(["p","p","p","p","m","m","b","b","b","b","b","u","u","r","r","u","n","n","n","n","n","n","n","n","n","n","n","u","u","u","u","a","a","u","u","r","r","r","s","s","a","a","y","y","y","g","g","g","g","g"]))
