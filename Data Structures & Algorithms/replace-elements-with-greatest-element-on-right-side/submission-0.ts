class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     * [2,4,5,3,1,2]
     */
    replaceElements(arr: number[]): number[] {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = -1;
            console.log(`arr[${i}] = ${arr[i]}`);
            if(i !== arr.length -1) {
                console.log(`inner loop from ${i + 1} to ${arr.length}`);
                for(let j = i + 1; j < arr.length; j++) {
                    console.log(`checking: ${arr[j]} > ${arr[i]}`)
                    if(arr[i] === undefined || arr[j] > arr[i]) {
                        arr[i] = arr[j];
                    }
                }
            }
        }
        return arr;
    }
}
