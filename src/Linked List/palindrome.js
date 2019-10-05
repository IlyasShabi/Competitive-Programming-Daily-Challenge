// https://leetcode.com/problems/palindrome-linked-list/
export function isPalindrome(list) {
    
    let stillPalindrome = true;
    let runner = list;
    let shouldGo = false;
    const visited = [];

    while (runner) {
        runner = runner.next;
        if(shouldGo){
            visited.push(list.value);
            list = list.next;

        }
        shouldGo =! shouldGo;
    }

    if(shouldGo) visited.push(list.value);
    
    let index = visited.length;
    while(list && stillPalindrome){
        if(list.value !== visited[--index]) stillPalindrome = false;
        list = list.next;
    }
    return stillPalindrome;
}
