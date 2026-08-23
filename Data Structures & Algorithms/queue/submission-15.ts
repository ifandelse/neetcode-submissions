class DequeNode {
    previous?: DequeNode;
    next?: DequeNode;
    value: number;

    constructor(value: number) {
        this.value = value;
    }
}

class MyDeque {
    private head?: DequeNode;
    private tail?: DequeNode;

    constructor() {}
    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head === undefined;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const isEmpty = this.isEmpty();
        const newTail = new DequeNode(value);
        if(isEmpty) {
            this.head = newTail;
            this.tail = this.head;
        } else {
            const origTail = this.tail;
            origTail.next = newTail;
            newTail.previous = origTail;
            this.tail = newTail;  
            
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const isEmpty = this.isEmpty();
        const newHead = new DequeNode(value);
        if(isEmpty) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            const origHead = this.head;
            origHead.previous = newHead;
            newHead.next = origHead;
            this.head = newHead;
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        const thisTail = this.tail;
        if(!thisTail) {
            return -1;
        }

        const val = thisTail.value;
        if(thisTail.previous) {
            this.tail = thisTail.previous;
            if(this.tail) {
                this.tail.next = undefined;
            }
        } else {
            this.tail = undefined;
            this.head = undefined;
        }
        return val;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        const thisHead = this.head;
        if(!thisHead) {
            return -1
        }
        const val = thisHead.value;

        if(thisHead.next) {
            this.head = thisHead.next;
            if(this.head) {
                this.head.previous = undefined;
            }
        } else {
            this.head = undefined;
            this.tail = undefined;
        }

        
        return val;
    }
}
