/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class ListNode {
//     val: any;
//     next: ListNode | null;

//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if(!head) {
            return head
        }
        let current = head.next;
        let newHead = new ListNode(head.val);
        while(current) {
            // insert the current node into the new node list (insert before newHead)
            let origNewHead = newHead;
            newHead = new ListNode(current.val);
            newHead.next = origNewHead;
            current = current.next;
        }

        return newHead;
    }
}
