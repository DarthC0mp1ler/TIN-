//c) Write a JavaScript function that checks whether a
// passed string is palindrome or not

function isPalidrome(str)
{
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalidrome("Level"));
console.log(isPalidrome("Differ"));
console.log(isPalidrome("nooN"));