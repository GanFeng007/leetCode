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
var deleteDuplicates = function (head) {
  var p1 = head
  while(p1.next){
    var current = p1.val
    var p2 = p1
    debugger
    while(p2.next){
      if(current === p2.next.val){
        p2 = p2.next.next
      }else{
        p2 = p2.next
      }
    }
    p1 = p1.next
  }
  console.log(JSON.stringify(p1))
  console.log(JSON.stringify(head))
  return head
};
// 未验证通过
console.log(JSON.stringify(util.makeListNode([1,1,2,3,3,4])))
console.log(deleteDuplicates(util.makeListNode([1,1,2,3,3,4])))