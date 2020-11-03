//j) Write a JavaScript program for binary search.

function biSearch(sequence, key)
{
    let leftmost = 0;
    let rightmost = sequence.length - 1;
    while (leftmost <= rightmost) {
        let m = ((leftmost + rightmost) / 2) | 0;
        if (sequence[m] === key) return m;
        else {
            if (sequence[m] > key) rightmost = m - 1;
            else leftmost = m + 1;
        }
    }
    return -1;
}

console.log(biSearch([1,2,2,3,3,4,5,5,7,8,8,9],7));
console.log(biSearch([1,2,2,3,3,4,5,5,7,8,8,9],6));
