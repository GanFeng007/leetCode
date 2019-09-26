// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/container-with-most-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 示例:
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

// 题干分析：求容器容纳最多的水，本质是求2个直线所形成的矩形组成的最大面积，面积公式为长乘以宽，这里的长就是选中的两条线的下标差值，宽就是两条线中的最小值
// 解法：通过分析可知，我们可以通过2个for循环遍历找出2条线组成的面积最大的即可 
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length
    var result = 0
    for(var index = 0; index < len; index++){
        for(var subIndex = index+1; subIndex < len; subIndex++){
            var min = height[index]
            if(min > height[subIndex]){
                min = height[subIndex]
            }
            var area = min * (subIndex - index)
            if(result < area){
                result = area
            }
        }
    }
    return result
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// 测试通过
// 执行用时 : 860 ms, 在所有 JavaScript 提交中击败了 39.00%的用户
// 内存消耗 : 35.7 MB, 在所有 JavaScript 提交中击败了 24.49%的用户