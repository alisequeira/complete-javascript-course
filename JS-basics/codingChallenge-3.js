/*************************
 * CODING CHALLENGE 3
 */

 /*
    John and his family went to a holiday and went to  different restaurants. the bills were $124, $48 and $268
    To tip the waiter a fair amount, john create a simple tip calculator (as a function). He likes to tip 20% of the bill 
    when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

    In the end, john would like to have 2 arrays:
    1. containing all three tips (one of each bill);
    2. containing all three final paid amounts (bill + tip)

    NOTE: to calculate 20% of a value, simply multiply if with 20/100 = 0.2
  */

 var tipCalculator = function(amounts){
    var totalAmount = [];
     var totalTips = [];
    
      function tips(amount){
        var tip = 0;
         if (amount < 50){
            tip = (amount * 20) / 100; 
         }else if(amount > 50 && amounts < 200){
            tip = (amount * 15) / 100;
         }else{
            tip = (amount * 10) / 100;
         }
          return tip;
      }
    
    for(let i = 0; i < amounts.length; i++){
      totalTips[i] = '$' + tips(amounts[i]);
      totalAmount[i]= '$' + (tips(amounts[i]) + amounts[i]);
    }
    console.log(totalTips);
    console.log(totalAmount);
  }
  
    var bills = [124, 48, 268];
  tipCalculator(bills);    