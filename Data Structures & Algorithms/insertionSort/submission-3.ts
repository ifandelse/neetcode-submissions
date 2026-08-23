/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     key: number;
//     value: string;
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }

class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        const output: Pair[][] = [];
        let firstUnsortedIndex = 1;
        if(pairs.length === 0) {
            return output;
        }
        output.push([...pairs]);

        while(firstUnsortedIndex < pairs.length) {
            const item = pairs[firstUnsortedIndex];
            let insertionIndex = undefined;
            for(let i = 0; i < firstUnsortedIndex; i++) {
                if(item.key < pairs[i].key) {
                    insertionIndex = i;
                    break;
                }
            }
            if(insertionIndex !== undefined) {
                const insertionItem = pairs[firstUnsortedIndex];
                for(let j = firstUnsortedIndex; j >= insertionIndex; j--) {
                    if(j === insertionIndex) {
                        pairs[j] = insertionItem;
                        break;
                    } else {
                        pairs[j] = pairs[j - 1];

                    }
                }
            }
            
            firstUnsortedIndex += 1;
            output.push([...pairs]);
        }


        return output;
    }
}
