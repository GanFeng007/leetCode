// https://leetcode-cn.com/problems/lexicographical-numbers/
// 给定一个整数 n, 返回从 1 到 n 的字典顺序。
// 例如，
// 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
// 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  var numbers = []
    if(n < 10){
      for(var index = 1; index <= n; index++){
        numbers.push(index)
      }
    }else {
      var temp = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]]
      for(var index = 10; index <= n; index++){
        var shang = getShange(index)
        temp[shang].push(index)
      }
      for(var index = 1;index < 10; index ++){
        numbers = numbers.concat(temp[index])
      }
    }
    return numbers
};
var getShange = function(numer){
  var shang = parseInt(numer/10)
  if(shang > 9){
    return getShange(shang)
  }
  return shang
}
// 未通过
console.log(JSON.stringify(lexicalOrder(105)))
// console.log(getShange(300))