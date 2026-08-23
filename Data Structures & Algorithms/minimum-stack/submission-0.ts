class MinStack {
    private _stack: number[];
    private _minStack: number[];

    constructor() {
        this._stack = [];
        this._minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this._stack.push(val);
        if(this._minStack.length === 0) {
            this._minStack.push(val);
        } else {
            const currentMin = this.getMin();
            this._minStack.push(Math.min(currentMin, val));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this._minStack.pop();
        this._stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this._stack[this._stack.length -1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this._minStack[this._minStack.length - 1];
    }
}
