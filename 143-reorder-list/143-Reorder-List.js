/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let q = []
    let t = head
    while(t){
        q.push(t)
        t = t.next
    }
    if(q.length <= 1){
        return 
    }
    let i = 0
    let s;
    let f;
    let last;
    while(q.length){
        if(i==0){
            s = q.shift()
            f = q.pop()
            s.next = f
        }
        else if(i%2 == 0){
            f = q.pop()
            s.next = f
            last = f

        }else{
            s = q.shift()
            f.next = s
            last = s
        }

        i++
    }
    if(last){
        last.next = null
    }
};