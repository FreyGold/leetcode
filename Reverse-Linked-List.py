# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        def traverse(node):
            nonlocal prev
            if not node: 
                return
            temp=node.next
            node.next=prev
            prev=node
            traverse(temp)
        traverse(head)
        return prev
        

    