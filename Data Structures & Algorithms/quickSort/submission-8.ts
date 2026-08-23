/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    sort(pairs: Pair[], low: number, high: number) {
        // console.log(`sort: ${low}, ${high}`);
        // console.log(`${JSON.stringify(pairs)}`);
        // console.log("--------------------------");
        if(high - low < 1) {
            return;
        }

        const pivot = pairs[high];
        let nextLeftIndex = low;

        for(let i = low; i < high; i++) {
            // console.log(`Comparing keys: ${pairs[i].key} < ${pivot.key}`)
            if(pairs[i].key < pivot.key) {
                // console.log(`comparing i to nextLeftIndex: ${i}, ${nextLeftIndex}`)
                if(i > nextLeftIndex) {
                    const orig = pairs[nextLeftIndex];
                    // console.log(`need to swap: ${JSON.stringify(orig)} and ${JSON.stringify(pairs[i])}`)
                    pairs[nextLeftIndex] = pairs[i];
                    pairs[i] = orig; 
                }
                nextLeftIndex += 1;
            }
            // console.log(`nextLeftIndex: ${nextLeftIndex}`);
        }
        const itemAtPivot = pairs[nextLeftIndex];
        // console.log(`About to swap: ${JSON.stringify(pivot)} and ${JSON.stringify(itemAtPivot)}`)
        pairs[nextLeftIndex] = pivot;
        pairs[high] = itemAtPivot;

        // console.log(`Res: ${JSON.stringify(pairs)}`)
        // console.log("#########################");

        this.sort(pairs, low, nextLeftIndex -1);
        this.sort(pairs, nextLeftIndex + 1, high);
    }
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     * [3, 2, 1, 6, 9, 1, 4]
     */
    quickSort(pairs: Pair[]): Pair[] {
        if(pairs.length <= 1) {
            return pairs;
        }
        this.sort(pairs, 0, pairs.length - 1);
        return pairs;
    }
}
