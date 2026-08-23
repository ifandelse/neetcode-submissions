class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let canonicalCount = 0;
        let currentCount = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) {
                currentCount += 1;
                if(currentCount > canonicalCount) {
                    canonicalCount = currentCount;
                }
            } else {
                currentCount = 0;
            }
        }

        return canonicalCount;
    }
}
