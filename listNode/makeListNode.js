/* 生成单链表
 * @Author: feng 
 * @Date: 2018-11-19 15:41:34 
 * @Last Modified by: feng
 * @Last Modified time: 2018-11-19 15:54:51
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
exports.makeListNode = function (nodes) {
  var head = new ListNode(nodes[0])
  var p = head
  for (var index = 1, len = nodes.length; index < len; index++) {
    p.next = new ListNode(nodes[index])
    p = p.next
  }
  return head
}