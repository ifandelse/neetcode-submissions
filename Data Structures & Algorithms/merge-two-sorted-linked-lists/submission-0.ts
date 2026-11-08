/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let cur1 = list1;
        let cur2 = list2;
        const newList = new ListNode("_dummy_");
        let curNode = newList;
        while(cur1 && cur2) {

            if(cur1.val < cur2.val) {
                curNode.next = cur1;
                cur1 = cur1.next;
            } else {
                curNode.next = cur2;
                cur2 = cur2.next;
            }
            curNode = curNode.next;
        }

        if(cur1) {
            curNode.next = cur1;
            curNode = curNode.next;
        }
        if(cur2) {
            curNode.next = cur2;
        }

        return newList.next;
    }
}
