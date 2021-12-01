
function  isValidParenthesis(str: string): boolean {
    let stack: string[] = [];
    let map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < str.length; i++) {
        if (str[i] in map) {
            if (stack.length === 0) {
                return false;
            }
            if (stack.pop() !== map[str[i]]) {
                return false;
            }
        } else {
            stack.push(str[i]);
        }
    }
    return stack.length === 0;
}