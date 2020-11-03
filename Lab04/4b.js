//b) Function calculating nth number in Fibonacci sequence.

function fibonacci(n)
{
    if(n <= 1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);

}

console.log("Fibbonacci number: " + fibonacci(5));