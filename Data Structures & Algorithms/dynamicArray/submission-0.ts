class DynamicArray {
    private _items: number[];
    private _capacity: number;
    private _size: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this._capacity = capacity;
        this._items = new Array(capacity);
        this._size = 0;
    }

    /**
     * @param {number} i
     * @returns {number} 
     */
    get(i: number): number {
        return this._items[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this._items[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this._size === this._capacity) {
            this.resize();
        }
        this._items[this._size] = n;
        this._size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this._size--;
        return this._items[this._size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this._capacity *= 2;
        const newItems = new Array(this._capacity);
        for (let i = 0; i < this._size; i++) {
            newItems[i] = this._items[i];
        }
        this._items = newItems;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this._size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this._capacity;
    }
}
