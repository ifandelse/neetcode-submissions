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

    merge(left: Pair[], right: Pair[]) {
        //console.log(`merge | left: ${JSON.stringify(left)}, right: ${JSON.stringify(right)}`)
        let x = 0;
        let y = 0;
        const mergedOutput = [];

        while(mergedOutput.length < (left.length + right.length)) {
            //console.log(`Comparing: ${left[x]?.key} <= ${right[y]?.key}`)
            //console.log(`x = ${x}, y = ${y}, left len = ${left.length}, right len = ${right.length}`)
            if(x !== left.length && left[x].key <= (right[y]?.key ?? Infinity)) {
                //console.log(`pushing ${JSON.stringify(left[x])}`)
                mergedOutput.push(left[x]);
                x += 1;
                //console.log(`incrementing x to ${x}`)
            } 
            if(y !== right.length && right[y].key <= (left[x]?.key ?? Infinity)) {
                //console.log(`pushing ${JSON.stringify(right[y])}`)
                mergedOutput.push(right[y]);
                y += 1;
                //console.log(`incrementing y to ${y}`)
            }
            //console.log(`Iteration: ${JSON.stringify(mergedOutput)}`)
        }

        // if(y < right.length) {
        //     mergedOutput.push(right.slice(y));
        // }

        // if(x < left.length) {
        //     mergedOutput.push(left.slice(x));
        // }

        //console.log(`Merge Return: ${JSON.stringify(mergedOutput)}`)
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
        console.log(`splitLen: ${splitLen}, left: ${JSON.stringify(left)}, right: ${JSON.stringify(right)}`)
        const leftSplit = this.mergeSort(left);
        const rightSplit = this.mergeSort(right);

        return this.merge(leftSplit, rightSplit);
    }
}
