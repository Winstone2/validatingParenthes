function isValidParentheses(str) {
    const stack = [];

    // Mapping to check corresponding closing parenthesis for each opening parenthesis
    const parenthesesMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of str) {
        if (char in parenthesesMap) {
            // Opening parenthesis encountered, push onto the stack
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // Closing parenthesis encountered
            if (stack.length === 0) {
                return false; // No corresponding opening parenthesis in the stack
            }

            const lastOpening = stack.pop();
            if (parenthesesMap[lastOpening] !== char) {
                return false; // Closing parenthesis does not match the last opening parenthesis
            }
        }
    }

    // Check if any unclosed parentheses are left in the stack
    return stack.length === 0;
}
