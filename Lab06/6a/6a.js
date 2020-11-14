/*Write a JS function that will convert temperatures between
Celsius and Fahrenheit scales (https://en.wikipedia.org/wiki/Fahrenheit) ,
taking input from a form on the page and printing output to a
field on the same page. Function should be invoked using HTML button.
 */

function convert(){
    if(document.getElementById("in").value.length === 0) return false;
    let celc = document.getElementById("in").value;
    let fahr = celc * 9 / 5 + 32;
    document.getElementById("ou").value = fahr;
    return false;
}