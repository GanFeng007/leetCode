var threeSum = function (nums) {
  var len = nums.length
  if (len < 3) return []
  var result = []
  var zero = 0
  for (var one = 0; one < len; one++) {
    for (var two = one + 1; two < len; two++) {
      for (var three = two + 1; three < len; three++) {
        var temp = []
        if (nums[one] + nums[two] + nums[three] === 0) {
          if ((nums[one] === 0 && nums[two] === 0 && nums[three] === 0)) {
            zero++
            break
          }
          if (result.length === 0) {
            temp.push(nums[one])
            temp.push(nums[two])
            temp.push(nums[three])
            result.push(temp)
          } else {
            var flag = true
            for (var index = 0; index < result.length; index++) {
              var item = result[index]
              if (item.includes(nums[one]) && item.includes(nums[two]) && item.includes(nums[three])) {
                flag = false
                break
              }
            }
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
  if (zero) {
    result.push([0, 0, 0])
  }
  return result;
};