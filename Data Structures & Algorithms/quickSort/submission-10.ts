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
        if(high - low < 1) {
            return;
        }

        const pivot = pairs[high];
        let nextLeftIndex = low;

        for(let i = low; i < high; i++) {
            if(pairs[i].key < pivot.key) {
                if(i !== nextLeftIndex) {
                    const orig = pairs[nextLeftIndex];
                    pairs[nextLeftIndex] = pairs[i];
                    pairs[i] = orig; 
                }
                nextLeftIndex += 1;
            }
        }
        const itemAtPivot = pairs[nextLeftIndex];
        pairs[nextLeftIndex] = pivot;
        pairs[high] = itemAtPivot;

        this.sort(pairs, low, nextLeftIndex -1);
        this.sort(pairs, nextLeftIndex + 1, high);
    }
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs: Pair[]): Pair[] {
        if(pairs.length <= 1) {
            return pairs;
        }
        this.sort(pairs, 0, pairs.length - 1);
        return pairs;
    }
}
