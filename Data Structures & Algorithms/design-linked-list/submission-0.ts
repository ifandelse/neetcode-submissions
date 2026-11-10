class ListNode {
    constructor(val: number, next: null | ListNode, prev: null | ListNode) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }

    next: ListNode | null;
    prev: ListNode | null;;
    val: number;
}

class MyLinkedList {
    head: ListNode;
    tail: ListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let idx = 0;
        let current = this.head;
        while(current) {
            if(idx === index) {
                return current.val;
            }
            idx += 1;
            current = current.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const origHead = this.head;
        const newNode = new ListNode(val, origHead, null);
        if(origHead) {
            origHead.prev = newNode;
        }
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const origTail = this.tail;
        const newNode = new ListNode(val, null, origTail);
        if(origTail) {
            origTail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head) {
            this.head = newNode;
        }
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        let current = this.head;
        const newNode = new ListNode(val, null, null);
        
        if(index === 0) {
            this.addAtHead(val);
            return;
        }
        
        let idx = 0;
        while(current) {
            if(index - 1 === idx) {
                const thisPrev = current;
                const thisNext = current.next;

                thisPrev.next = newNode;
                newNode.prev = thisPrev;

                if(thisNext) {
                    thisNext.prev = newNode;
                    newNode.next = thisNext;
                } else {
                    this.tail = newNode;
                }
                return;
            }
            idx += 1;
            current = current.next;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        let idx = 0;
        let current = this.head;
        while(current) {
            if(idx === index) {
                const thisPrev = current.prev;
                const thisNext = current.next;

                if(thisPrev) {
                    thisPrev.next = thisNext;
                } else {
                    this.head = thisNext;
                }

                if(thisNext) {
                    thisNext.prev = thisPrev;
                } else {
                    this.tail = thisPrev;
                }

                break;
            }
            idx += 1;
            current = current.next;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
