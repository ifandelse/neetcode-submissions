const ALLOWABLE_FACTORS = [2, 3, 5];

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isUgly(n: number): boolean {
        if (n <= 0) {
            return false;
        }
        for (const p of ALLOWABLE_FACTORS) {
            while (n % p === 0) {
                n = n/p;
            }
        }
        return n === 1;
    }
}
