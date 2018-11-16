var threeSum = function (nums) {
    if (nums.length < 3) return []
    // var MAX_NUMS = Math.max.apply(null, nums)
    // var MIN_NUMS = Math.min.apply(null, nums)
    var MAX_NUMS = 99999
    var zheng = new Array(MAX_NUMS + 1).fill(0)
    var fu = new Array(MAX_NUMS + 1).fill(0)
    var result = []
    for (var index = 0; index < nums.length; index++) {
        if (nums[index] > 0) {
            zheng[nums[index]]++
        } else {
            fu[-nums[index]]++
        }
    }
    if (fu[0]) {
        // 寻找一正一负切互为相反数
        for (var index = 1; index < zheng.length; index++) {
            if (zheng[index] >= 1 && fu[index] >= 1) {
                result.push([-index, 0, index])
            }
        }
    }
    // 寻找一正两负
    for (var index = 1; index < zheng.length; index++) {
        // 正数为0表示无该正数
        if (zheng[index]) {
            for (var subIndex = 1; subIndex < fu.length; subIndex++) {
                var three = index - subIndex
                if (three !== 0 && three === subIndex && fu[subIndex] > 1) {
                    result.push([-subIndex, -three, index])
                } else if (fu[subIndex] >= 1 && fu[three] >= 1 && three > subIndex) {
                    result.push([-three, -subIndex, index])
                }
            }
        }
    }
    // 寻找一负两正
    for (var index = 1; index < fu.length; index++) {
        // 负数为0表示无该负数
        if (fu[index]) {
            for (var subIndex = 1; subIndex < zheng.length; subIndex++) {
                var three = index - subIndex
                if (three !== 0 && three === subIndex && zheng[subIndex] > 1) {
                    result.push([-index, subIndex, three])
                } else if (zheng[subIndex] >= 1 && zheng[three] >= 1 && three > subIndex) {
                    result.push([-index, subIndex, three])
                }
            }
        }
    }
    if (fu[0] > 2) {
        result.push([0, 0, 0])
    }
    return result
}
// 未通过
console.time('开始3')
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]))
console.log(threeSum([3,-3,-1,-6,6,-1,-10,-2,-8,-4,6,2,0,9,-3,-7,9,-10,-4,5,2,-10,-2,-9]).length)
console.timeEnd('开始3')
