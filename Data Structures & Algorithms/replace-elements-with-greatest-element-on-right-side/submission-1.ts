class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = -1;
            if(i !== arr.length -1) {
                for(let j = i + 1; j < arr.length; j++) {
                    if(arr[i] === undefined || arr[j] > arr[i]) {
                        arr[i] = arr[j];
                    }
                }
            }
        }
        return arr;
    }
}
