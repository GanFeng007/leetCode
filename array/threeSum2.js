var threeSum = function (nums) {
  var fushu = []
  var zero = []
  var zhengshu = []
  for (var index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      zhengshu.push(nums[index])
    } else if (nums[index] < 0) {
      fushu.push(nums[index])
    } else {
      zero.push(nums[index])
    }
  }
}
