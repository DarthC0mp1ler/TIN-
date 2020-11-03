//e) Write a JavaScript function that accepts a string as
// a parameter and find the longest word within the string

function longestWord(str) {
    let sent = str.split(' ');
    let maxStr = sent[0];
    for (let i = 1; i < sent.length; i++) {
        if(maxStr.length < sent[i].length)
            maxStr = sent[i];
    }
    return maxStr;
}

console.log(longestWord("a parameter and find the longest word within the string"));