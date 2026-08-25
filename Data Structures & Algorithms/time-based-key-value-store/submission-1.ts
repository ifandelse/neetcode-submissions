type TemporalValue = {
    timestamp: number;
    value: string;
}

class TimeMap {
    private keyStore: Map<string, TemporalValue[]>;

    constructor() {
        this.keyStore = new Map<string, TemporalValue[]>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        // we have this key already?
        let items = this.keyStore.get(key) ?? [];
        items.push({ value, timestamp });
        this.keyStore.set(key, items);
    }

    _findValue(values: TemporalValue[], time: number) {
        let low = 0;
        let high = values.length - 1;
        let result = "";

        while(low <= high) {
            const mid = Math.floor((low + high) / 2 );
            if(values[mid].timestamp <= time) {
                result = values[mid].value;
                low = mid + 1;
            } else if (values[mid].timestamp > time) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return result;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const values = this.keyStore.get(key);
        if(!values) {
            return "";
        }
        const value = this._findValue(values, timestamp);
        return value;
    }
}
