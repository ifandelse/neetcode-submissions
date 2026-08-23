class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let valCount = 0;
        let kCount = 0;
        let kMap = {};
        let kMapIdx = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === val) {
                valCount += 1;
                nums[i] = undefined;
            } else {
                kCount += 1;
                kMap[kMapIdx] = nums[i];
                kMapIdx += 1;
            }
        }

        let x = 0;
        while(x <= kMapIdx) {
            nums[x] = kMap[x];
            x += 1;
        }

        return kCount;
    }
}
