// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 示例 1:
// 输入: 1->1->2
// 输出: 1->2

// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const util = require('./makeListNode')
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 解法一：排重插入，注意关键词排序链表
// var deleteDuplicates = function (head) {
//   if (!head) return head
//   var result = new ListNode(head.val)
//   var curr = result
//   while (head.next != null) {
//     if (curr.val != head.next.val) {
//       curr.next = new ListNode(head.next.val)
//       curr = curr.next
//     }
//     head = head.next
//   }
//   return result
// }
// 解法二：直接删除重复节点，注意关键词排序链表
var deleteDuplicates = function(head) {
  var current = head
  while(current!=null&&current.next!=null){
      if(current.val ==current.next.val){
          current.next = current.next.next
      }else {
          current = current.next
      }
  }
  return head
}
// 验证通过
console.log(JSON.stringify(util.makeListNode([1, 1, 2, 3, 3, 4])))
console.log(deleteDuplicates(util.makeListNode([1, 1, 2, 3, 3, 4])))