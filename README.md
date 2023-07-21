# validatingParenthes
Thought Process:

    We start by initializing an empty stack that will store the opening parentheses encountered in the string.
    We create a parenthesesMap object that maps each opening parenthesis to its corresponding closing parenthesis. This will help us quickly check if a closing parenthesis matches the last opening parenthesis in the stack.
    We then iterate through the input string character by character.
    If we encounter an opening parenthesis, we push it onto the stack.
    If we encounter a closing parenthesis, we check if the stack is not empty and the last opening parenthesis in the stack corresponds to the closing parenthesis. If both conditions are true, we pop the last opening parenthesis from the stack, as it has found its corresponding closing parenthesis.
    If any of the above conditions fail during the iteration, we return false, indicating that the parentheses are not balanced.
    After the iteration, we check if any unclosed parentheses are left in the stack. If the stack is not empty, it means there are unmatched opening parentheses, and we return false. Otherwise, we return true, indicating that the string has balanced parentheses.

Edge Cases to Consider:

    If the input string is empty, we should consider it as valid since there are no parentheses to validate.
    If the input string contains only opening parentheses or only closing parentheses, it should be considered invalid.
    If the input string contains other characters besides parentheses, we should ignore them while performing the validation.
    If the input string has an odd number of parentheses, it should be considered invalid since there can't be a matching pair for every opening parenthesis.
