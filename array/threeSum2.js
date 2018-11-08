var threeSum = function (nums) {
  var fushu = []
  var zero = []
  var zhengshu = []
  var result = []
  var one = []
  var two = []
  var three = []
  for (var index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      zhengshu.push(nums[index])
    } else if (nums[index] < 0) {
      fushu.push(nums[index])
    } else {
      zero.push(nums[index])
    }
  }
  if (zhengshu.length === 0 && zero.length < 3) {
    return []
  }
  if (fushu.length === 0 && zero.length < 3) {
    return []
  }
  var set = new Set()
  if (zero.length !== 0) {
    // 寻找一正一负切互为相反数
    for (var index = 0; index < zhengshu.length; index++) {
      var zhengNumber = zhengshu[index]
      if (fushu.includes(-zhengNumber) && !set.has(zhengNumber)) {
        result.push([-zhengNumber, 0, zhengNumber])
        set.add(zhengNumber)
      }
    }
  }
  // 寻找一正两负且满足他们相加为0
  for (var index = 0; index < zhengshu.length; index++) {
    var zhengNumber = zhengshu[index]
    for (var subIndex = 0; subIndex < fushu.length; subIndex++) {
      var fuNumber = -(zhengNumber + fushu[subIndex])
      if (fushu.includes(fuNumber, subIndex + 1)) {
        // result.push([fuNumber, fushu[subIndex], zhengNumber])
        one.push(fuNumber < fushu[subIndex]?fuNumber:fushu[subIndex])
        two.push(fuNumber < fushu[subIndex]?fushu[subIndex]:fuNumber)
        three.push(zhengNumber)
      }
    }
  }
  // 寻找两正一负且满足他们相加为0
  for (var index = 0; index < fushu.length; index++) {
    var fuNumber = fushu[index]
    for (var subIndex = 0; subIndex < zhengshu.length; subIndex++) {
      var zhengNumber = -(fuNumber + zhengshu[subIndex])
      if (zhengshu.includes(zhengNumber, subIndex + 1)) {
        // result.push([fushu[index], zhengNumber, zhengshu[subIndex]])
        one.push(fushu[index])
        two.push(zhengNumber < zhengshu[subIndex]?zhengNumber:zhengshu[subIndex])
        three.push(zhengNumber < zhengshu[subIndex]?zhengshu[subIndex]:zhengNumber)
      }
    }
  }
  for(var index = 0; index < one.length; index++){
    var flag = true
    for(var subIndex = index+1;subIndex < one.length;subIndex++){
      if(one[index] === one[subIndex] && two[index] === two[subIndex] && three[index] === three[subIndex]){
        flag = false
        break
      }
    }
    if(flag){
      result.push([one[index],two[index],three[index]])
    }
  }
  if(zero.length >= 3){
    result.push([0,0,0])
  }
  return result
}
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))