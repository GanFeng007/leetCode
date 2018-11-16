// 利用四重for循环实现
var threeSum = function (nums) {
  var len = nums.length
  if (len < 3) return []
  var result = []
  var zero = 0
  for (var one = 0; one < len; one++) {
    for (var two = one + 1; two < len; two++) {
      for (var three = two + 1; three < len; three++) {
        var temp = []
        // 进行判断是否满足a+b+c=0
        if (nums[one] + nums[two] + nums[three] === 0) {
          // 3个都为0进行记录
          if ((nums[one] === 0 && nums[two] === 0 && nums[three] === 0)) {
            zero++
            break
          }
          // 首次插入result，不进行判重
          if (result.length === 0) {
            temp.push(nums[one])
            temp.push(nums[two])
            temp.push(nums[three])
            result.push(temp)
          } else {
            var flag = true
            // 查重判断
            for (var index = 0; index < result.length; index++) {
              var item = result[index]
              if (item.includes(nums[one]) && item.includes(nums[two]) && item.includes(nums[three])) {
                flag = false
                break
              }
            }
            // 不重复，则插入
            if (flag) {
              temp.push(nums[one])
              temp.push(nums[two])
              temp.push(nums[three])
              result.push(temp)
            }
          }
        }
      }
    }
  }
  // 0值结果判断
  if (zero) {
    result.push([0, 0, 0])
  }
  return result;
};
// 未通过
console.time('开始1')
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]))
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]).length)
console.timeEnd('开始1')