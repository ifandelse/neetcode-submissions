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
        //console.log("append:", value);
        const isEmpty = this.isEmpty();
        const newTail = new DequeNode(value);
        //console.log("isEmpty:", isEmpty);
        if(isEmpty) {
            this.head = newTail;
            this.tail = this.head;
        } else {
            const origTail = this.tail;
            //console.log("origTail:", origTail);
            origTail.next = newTail;
            newTail.previous = origTail;
            this.tail = newTail;  
            
        }
        //console.log("STATUS:", this);
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        //console.log("appendleft:", value);
        const isEmpty = this.isEmpty();
        const newHead = new DequeNode(value);
        //console.log("isEmpty:", isEmpty);
        if(isEmpty) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            const origHead = this.head;
            origHead.previous = newHead;
            newHead.next = origHead;
            this.head = newHead;
        }
        //console.log("STATUS:", this);
    }

    /**
     * @return {number}
     */
    pop(): number {
        const thisTail = this.tail;
        if(thisTail) {
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
            //console.log("pop result:", this);
            return val;
        } else {
            //console.log("pop result (-1)");
            return -1;
        }
    }

    /**
     * @return {number}
     */
    popleft(): number {
        const thisHead = this.head;
        if(thisHead) {
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
            //console.log("popLeft result:", this);
            return val;
        } else {
            //console.log("popLeft result (-1)");
            return -1;
        }
    }
}
