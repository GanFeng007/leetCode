/*
给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次
你可以按任意顺序返回答案。
示例 1：
输入：["bella","label","roller"]
输出：["e","l","l"]

示例 2：
输入：["cool","lock","cook"]
输出：["c","o"]
 
提示：
1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * 题解：注意记录上次匹配的位置，每次匹配从上次匹配的位置开始重新匹配，若存在则继续插入数组中
 * positionMap用来记录每个数组里面每个字符串上次匹配的位置
 * */ 
var commonChars = function (A) {
    var matchChars = A.shift();
    var resultChars = [];
    var positionMap = [];
    for (var index = 0; index < A.length; index++) {
        positionMap.push({});
    }
    for (var index = 0, len = matchChars.length; index < len; index++) {
        var flag = true;
        var c = matchChars[index];
        for (var subIndex = 0, subLen = A.length; subIndex < subLen; subIndex++) {
            var start = positionMap[subIndex][c] !== undefined ? positionMap[subIndex][c] : -1;
            var indexA = A[subIndex].indexOf(c, start + 1);
            if (indexA !== -1) {
                positionMap[subIndex][c] = indexA;
            } else {
                flag = false;
            }
        }
        if (flag) {
            resultChars.push(c)
        }
    }
    console.log(resultChars)
    return resultChars;
};
commonChars([
    "afcgfbfcdeefhgcaaccgbcehehfbjfgfjacjijibfejjbggbfc",
    "beeafaagajchjdeehgijfaegigfcjidifgcjffhgcghdjieggj",
])