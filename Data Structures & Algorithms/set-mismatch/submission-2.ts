class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums: number[]): number[] {
        const map: Record<number, number> = {};
        let result: number[] = [];

        for(let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] ?? 0) + 1;
            if(map[nums[i]] > 1) {
                result.push(nums[i]);
            }
        }

        for(let j = 1; j <= nums.length; j++) {
            if(map[j] === undefined) {
                result.push(j);
            }
        }
        return result;
    }
}
