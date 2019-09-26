// 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。
// 因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
// 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
// 如果有多个答案，你可以返回其中任何一个。保证答案存在。

// 示例 1：
// 输入：A = [1,1], B = [2,2]
// 输出：[1,2]
// 示例 2：

// 输入：A = [1,2], B = [2,3]
// 输出：[1,2]
// 示例 3：

// 输入：A = [2], B = [1,3]
// 输出：[2,3]
// 示例 4：

// 输入：A = [1,2,5], B = [2,4]
// 输出：[5,4]
//  
// 提示：

// 1 <= A.length <= 10000
// 1 <= B.length <= 10000
// 1 <= A[i] <= 100000
// 1 <= B[i] <= 100000
// 保证爱丽丝与鲍勃的糖果总量不同。
// 答案肯定存在。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/fair-candy-swap
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 题干分析：在2个数组（A,B）中，互换一个值，使得2个数组的和相等
// 解法：首先计算2个数组的和（sumA，sumB），然后求它们和的平均值sum，将B中的某个值tempB和数组A的某个值tempA替换，
// 当出现（sumA - tempA + tempB）== sum，则[tempA,tempB]就是我们需要的答案
// ps：此处简略校验了sumB的情况，由于一定有答案，最先出现的就是我们需要的结果，若不一定存在答案，还需要进一步校验
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var result = []
    var flag = false
    var sumA = A.reduce(getSum)
    var sumB = B.reduce(getSum)
    var sum = (sumA + sumB)/2
    for(var index = 0, lenA = A.length; index < lenA; index++){
        var tempA = A[index]
        var tempSum = sumA - tempA
        for(var subIndex = 0, lenB = B.length; subIndex < lenB; subIndex++){
            var tempB = B[subIndex]
            if(tempSum+tempB == sum){
                result = [tempA,tempB]
                flag = true
                break
            }
        }
        if(flag){
            break
        }
    }
    return result
};
function getSum(total, num) {
    return total + num;
}
console.log(fairCandySwap([1,1],[2,2]))
console.log(fairCandySwap([1,2,5],[2,4]))