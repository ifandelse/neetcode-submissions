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

    merge(left: Pair[], right: Pair[]) : Pair[] {
        let x = 0;
        let y = 0;
        const mergedOutput: Pair[] = [];

        while(mergedOutput.length < (left.length + right.length)) {
            if(x !== left.length && left[x].key <= (right[y]?.key ?? Infinity)) {
                mergedOutput.push(left[x]);
                x += 1;
            } else if(y !== right.length && right[y].key <= (left[x]?.key ?? Infinity)) {
                mergedOutput.push(right[y]);
                y += 1;
            }
        }

        return mergedOutput;
    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pair[]): Pair[] {
        if(pairs.length <= 1) {
            return pairs;
        }
        const splitLen = Math.floor(pairs.length / 2);
        const left = pairs.slice(0, splitLen);
        const right = pairs.slice(splitLen);
        const leftSplit = this.mergeSort(left);
        const rightSplit = this.mergeSort(right);

        return this.merge(leftSplit, rightSplit);
    }
}
