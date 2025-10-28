# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slowPointer=head
        fastPointer=head
        isCycle=False
        def traverse(node):
            nonlocal slowPointer,fastPointer,isCycle
            if not fastPointer or not fastPointer.next:
                return
            slowPointer=slowPointer.next
            fastPointer=fastPointer.next.next
            if slowPointer==fastPointer:
                isCycle=True
                return
            traverse(node.next)
        traverse(head)
        return isCycle