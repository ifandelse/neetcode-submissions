class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores = [];
        for(let i = 0; i < operations.length; i++) {
            if(operations[i] === "C") {
                scores.pop();
            } else if (operations[i] === "D") {
                scores.push(scores[scores.length -1] * 2);
            } else if (operations[i] === "+") {
                scores.push(scores[scores.length -1] + scores[scores.length -2]);
            } else {
                scores.push(+operations[i])
            }
        }

        return scores.reduce((acc, x) => {
            return acc + x;
        }, 0);
    }
}
