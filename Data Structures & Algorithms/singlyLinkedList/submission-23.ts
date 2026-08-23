class ListNode {
    value: number;
    next: ListNode;

    constructor( value: number ) {
        this.value = value;
    }
}

class LinkedList {
    _node: ListNode;

    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let i = 1;

        if(index === 0) {
            return this._node?.value ?? -1;
        }

        let targetNode: ListNode = this._node;
        while(targetNode) {
            targetNode = targetNode?.next;
            if( i === index) {
                return targetNode?.value ?? -1;
            }
            if( i > index ) {
                return -1;
            }
            i += 1;
        }
        return targetNode?.value ?? -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const origNode = this._node;
        this._node = new ListNode(val);
        this._node.next = origNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if(this._node === undefined) {
            this._node = new ListNode(val);
            return;
        }

        let thisNode = this._node;
        while(true) {
            if(thisNode.next === undefined) {
                break;
            }
            thisNode = thisNode.next;
        }

        thisNode.next = new ListNode(val);
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if(this._node === undefined) {
            return false;
        }

        if(index === 0) {
            this._node = this._node.next;
            return true;
        }

        let i = 1;
        let previousNode = this._node;
        let thisNode = this._node.next;
        while(thisNode) {
            if(i === index) {
                previousNode.next = thisNode.next;
                return true;
            }
            previousNode = thisNode;
            thisNode = thisNode.next;
            i += 1;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const vals = [];

        if(this._node === undefined) {
            return vals;
        } else {
            let thisNode = this._node;
            while(thisNode) {
                vals.push(thisNode.value);
                thisNode = thisNode.next;
            }
        }
        return vals;
    }
}
