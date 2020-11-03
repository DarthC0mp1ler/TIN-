//h) Write a JavaScript function which will
// take an array of numbers stored and find
// the second lowest and second greatest numbers,
// respectively.

function secondValues(... arr) {
    let lowest = arr[0], secLowest = arr[0];
    let greatest = arr[0], secGreatest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(lowest > arr[i])
        {
            secLowest = lowest;
            lowest = arr[i];
        }
        if(secLowest > arr[i] && arr[i] !== lowest)
        {
            secLowest = arr[i];
        }
        if(greatest < arr[i])
        {
            secGreatest = greatest;
            greatest = arr[i];
        }
        if(secGreatest < arr[i] && arr[i] !== greatest)
        {
            secGreatest = arr[i];
        }
    }
    console.log(lowest + " " +greatest );

    return [secLowest, secGreatest]
}

console.log(secondValues(2,1,4,5,9,11));
console.log(secondValues(9,1,4,5,11,2));