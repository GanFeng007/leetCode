// 将非负整数转换为其对应的英文表示。可以保证给定输入小于 2**31 - 1 。

// 示例 1:
// 输入: 123
// 输出: "One Hundred Twenty Three"

// 示例 2:
// 输入: 12345
// 输出: "Twelve Thousand Three Hundred Forty Five"

// 示例 3:
// 输入: 1234567
// 输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// 示例 4:
// 输入: 1234567891
// 输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/integer-to-english-words
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const Ten = 10;
    const Hundred = 100;
    const Thousand = 1000;
    const Million = 1000000;
    const Billion = 1000000000;
    const wordMap = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand',
        1000000: 'million',
        1000000000: 'billion',
    }
    let result = '';

};