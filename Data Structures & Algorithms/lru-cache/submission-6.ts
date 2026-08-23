type LinkedNode = {
    key: number;
    value: number;
    next: LinkedNode | null;
    previous: LinkedNode | null;
};

class LRUCache {
    private capacity: number;
    private head: LinkedNode;
    private tail: LinkedNode;
    private map: Map<number, LinkedNode> = new Map();

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        // set dummy nodes for head/tail
        const dummyHead = { key: -1, value: -1, next: null, previous: null };
        const dummyTail = { key: -1, value: -1, next: null, previous: null };
        dummyHead.next = dummyTail;
        dummyTail.previous = dummyHead;
        this.head = dummyHead;
        this.tail = dummyTail;
    }

    _removeNode(node: LinkedNode) {
        const previous = node.previous;
        const next = node.next;
        previous.next = next;
        next.previous = previous;
    }

    _insertTail(node: LinkedNode) {
        const previous = this.tail.previous;
        previous.next = node;
        node.previous = previous;
        node.next = this.tail;
        this.tail.previous = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const mappedNode = this.map.get(key);
        if(!mappedNode) {
            return -1;
        }

        this._removeNode(mappedNode);
        this._insertTail(mappedNode);

        return mappedNode.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        // do we already have this value mapped?
        let node = this.map.get(key);

        if(node === undefined) {
            node = {
                key,
                value,
                next: null,
                previous: null
            };
            this.map.set(node.key, node);
        } else {
            node.value = value;
            this._removeNode(node);
        }

        this._insertTail(node);

        // eviction time?
        if (this.map.size > this.capacity) {
            this.map.delete(this.head.next.key);
            this._removeNode(this.head.next);
        }
    }
}
