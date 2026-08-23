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
            //console.log(`firstUnsortedIndex: ${firstUnsortedIndex}, ${JSON.stringify(item)}`)
            let insertionIndex = undefined;
            for(let i = 0; i < firstUnsortedIndex; i++) {
                //console.log(`comparing item.key ${item.key} to pairs[i].key ${pairs[i].key}`)
                if(item.key < pairs[i].key) {
                    insertionIndex = i;
                    //console.log("Found insertion index: ", insertionIndex);
                    break;
                }
            }
            if(insertionIndex !== undefined) {
                const insertionItem = pairs[firstUnsortedIndex];
                //console.log(`insertionItem: ${JSON.stringify(insertionItem)}`)
                for(let j = firstUnsortedIndex; j >= insertionIndex; j--) {
                    //console.log(`j = ${j}`)
                    if(j === insertionIndex) {
                        //console.log(`setting pairs[${j}] to ${JSON.stringify(insertionItem)}`)
                        pairs[j] = insertionItem;
                        break;
                    } else {
                        //console.log(`setting pairs[${j}] to pairs[j - 1] (${JSON.stringify(pairs[j - 1])})`)
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
