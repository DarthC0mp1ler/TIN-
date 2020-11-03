//f) Write a JavaScript function that accepts a number as
// a parameter and check the number is prime or not

function isPrime(n)
{
    for (let i = 2; i < n/2; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(13));