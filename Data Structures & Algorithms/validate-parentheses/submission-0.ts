const LOOKUP = {
    "}" : "{",
    "]" : "[",
    ")" : "(",
};
const closers = Object.keys(LOOKUP);
const openers = Object.values(LOOKUP);

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        for(let i = 0; i < s.length; i++ ) {
            if(openers.includes(s[i])) {
                stack.push(s[i]);
                continue;
            }
            if(closers.includes(s[i])) {
                if(stack[stack.length - 1] === LOOKUP[s[i]]) {
                    stack.pop()
                } else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
