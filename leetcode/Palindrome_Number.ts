


function isPalindrome(num: number): boolean {
    let str: string = num.toString();
    let len: number = str.length;
    let mid: number = Math.floor(len / 2);
    for (let i: number = 0; i < mid; i++){
        if(str[i]!=str[len-i-1]){
            return false;
        }
    }
    return true;
}