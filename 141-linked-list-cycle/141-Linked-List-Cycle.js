/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let tort = head
    let rab = head
    if(!head){
        return false
    }
    while(rab && rab.next){
        tort = tort.next
        rab = rab.next.next
        if(tort == rab){
            return true
        }
    }
    return false
};