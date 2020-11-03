//a) Function calculating the factorial of a number. Do this using recursion and iteration.
// Create recursive function using function expression, iterative function using function declaration

function recFact(n)
{
    if( n < 0 ) return 0;
    if(n === 1 || n === 0) return 1;
    return n*recFact(n-1)
}

var iterFact = function(n){
    if( n < 0 ) return 0;
    let res = 1;
    if(n === 0 && n === 1) return 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

console.log("Iterative factorial: " + iterFact(5));
console.log("Recursive factorial: " + recFact(5));
