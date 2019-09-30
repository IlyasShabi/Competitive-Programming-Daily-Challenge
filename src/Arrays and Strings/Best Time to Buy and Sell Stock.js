var maxProfit = function(prices) {
    var profit = 0;
    var current_profit = 0;
    var last = prices[0];
    for(var i =1; i<prices.length ; i++){
        var temp = prices[i] - last;
        if(last < prices[i] && temp > current_profit ){
           current_profit = temp;
        }else{
             last = prices[i];
            profit+= current_profit;
            current_profit = 0;
        }
    }
    return profit+ current_profit;
};