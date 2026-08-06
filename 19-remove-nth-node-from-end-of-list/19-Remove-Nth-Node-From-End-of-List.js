/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let j = 1;
    let r=head;
    while(r && r.next){
        
        if(r.next.next){
            r=r.next.next
            j+=2
        }else if (!r.next){
            continue
        }else{
            r=r.next
            j++
        }
    }
    
    let target = j - n
    if (target === 0) {
        return head.next;
    }
    let i = 0;
    let prev;
    let cur = head;
    while(i < j){
        if(i == target){
            prev.next = cur.next
            break;
        }
        prev = cur
        cur = cur.next
        i++
    }
    return head
};