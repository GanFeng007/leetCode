// fushu为负数集合的数组
// zeor为0集合的数组
// zhengshu为正数集合的数组

var threeSum = function (nums) {
  var fushu = []
  var zero = []
  var zhengshu = []
  var result = []
  var one = []
  var two = []
  var three = []
  // 对nums进行处理，依次将负数、0、正数插入对应的数组中
  for (var index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      zhengshu.push(nums[index])
    } else if (nums[index] < 0) {
      fushu.push(nums[index])
    } else {
      zero.push(nums[index])
    }
  }
  // 若只存在负数，且0的个数小于3则无解
  if (zhengshu.length === 0 && zero.length < 3) {
    return []
  }
  // 若只存在正数且0的个数小于3则无解
  if (fushu.length === 0 && zero.length < 3) {
    return []
  }
  var set = new Set()
  if (zero.length !== 0) {
    // 寻找一正一负切互为相反数
    for (var index = 0; index < zhengshu.length; index++) {
      var zhengNumber = zhengshu[index]
      // 利用set进行查重判断
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
      // 利用差值法
      var fuNumber = -(zhengNumber + fushu[subIndex])
      // 利用数组的includes函数进行值得判断和去重
      if (fushu.includes(fuNumber, subIndex + 1)) {
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
      // 利用差值法
      var zhengNumber = -(fuNumber + zhengshu[subIndex])
      // 利用数组的includes函数进行值得判断和去重
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
// 未通过
console.time('开始2')
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]))
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]).length)
console.timeEnd('开始2')