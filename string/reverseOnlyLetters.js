// 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
//  
// 示例 1：
// 输入："ab-cd"
// 输出："dc-ba"

// 示例 2：
// 输入："a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"

// 示例 3：
// 输入："Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"
//  
// 提示：
// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S 中不包含 \ or "

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-only-letters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} S
 * @return {string}
 */
/**
 * 解题思路：
 * 1.首先将字符串通过数组存起来
 * 2.然后通过遍历数组，将数组中的英文字符串存入新数组中去，并将当前索引的内容置为空字符串
 * 3.遍历数组，将索引下内容为空字符的替换成新数组的最后一个
 * 注意：
 * 英文字符的ascii值对应如下
 * A-Z 对应65-90
 * a-z 对应 97-122
 * 通过charCodeAt函数可获取字符的ascii值
 * 'a'.charCodeAt()
 */
var reverseOnlyLetters = function(S) {
    var newArray = [];
    var tempArray = S.split('');
    for(var index = 0, len = tempArray.length; index < len; index++){
        var number = tempArray[index].charCodeAt();
        if((number >= 65 && number <= 90) || (number >= 97 && number <=122)){
            newArray.push(tempArray[index]);
            tempArray[index] = '';
        }
    }
    for(var index = 0; index < len; index++){
        if(tempArray[index]===''){
            tempArray[index] = newArray.pop();
        }
    }
    return tempArray.join('');
};
console.log(reverseOnlyLetters("ab-cd"))
// 测试通过