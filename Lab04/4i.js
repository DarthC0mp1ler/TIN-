//i) Write a JavaScript function to convert an amount of money to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) Here 46 is the amount. 
// and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {
    let leftAmount = amount;
    coins = coins.sort(function(a, b){return b - a}); //just in case it is not sorted
    loop:
        while(leftAmount > 0)
        {
            for (let i = 0; i < coins.length; i++) {
                if(leftAmount >= coins[i])
                {
                    leftAmount -= coins[i];
                    console.log(coins[i]);
                    continue loop;
                }
            }

        }
}

amountToCoins(46,[25, 10, 5, 2, 1]);