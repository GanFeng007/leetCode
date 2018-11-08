var threeSum = function (nums) {
    var MAX_NUMS = 99999999
    var zheng = new Array(MAX_NUMS).fill(0)
    var fu = new Array(MAX_NUMS).fill(0)
    for(var index = 0; index < nums.length;index++){
        if(nums[index] > 0){
            zheng[nums[index]]++
        }else {
            fu[-nums[index]]++
        }
    }
    return zheng
}

console.log()
// console.log(Math.max(1,83390))