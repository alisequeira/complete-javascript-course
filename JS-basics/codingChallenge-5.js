/*************************
 * CODING CHALLENGE 5
 */

 /*
    Remember the tip calculator challenge? let's create a more advance version using averything we learned!
    This time,John and his family went to 5 different restaurants. the bill were 124, 48, 268, 180,42.
    Jonh likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and  $200, and %10 if the bill
    is more than $200.

    Implement the tip calculator using object and loops:
    1. Create an object with an array for the bill values.
    2. Add an method to calculate the tip
    3. This method should include a loop to interact over all the paid bills and do the tip calculation.
    4. As an output, create: 1. a new array containing all the tips and an array containig final paid amounts.

    EXTRA AFTER YOU FINISHING: Mark's family also went on a holiday, going to 4 different restaurant. the bills were 
    77, 375, 110, 45.
    Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and  $300, and %25 if the bill
    is more than $200.

    5. Implemente the same  functionality as before, this time using Mark's rules
    6. create a function to calculate the average of given array tips.
    7. calculate the average tip for each family.
    8. log to the console which family paid the highest tips on average.
 */

var johnbill = {
    name: 'John Smith',
    bills: [124, 48, 268, 180,42],
    calcTip: function(){
      this.tips = [];
      for(let i = 0; i < this.bills.length; i++){
             if (this.bills[i] < 50){
              this.tips[i] = (this.bills[i] * 20) / 100; 
           }else if(this.bills[i]> 50 && this.bills[i] < 200){
            this.tips[i] = (this.bills[i] * 15) / 100;
           }else{
              this.tips[i] = (this.bills[i] * 10) / 100;
           }
        }
    },
    calcTotal: function(){
      this.total = [];
      for(let i = 0; i < this.tips.length; i++){
        this.total[i] = `$ ${this.tips[i] + this.bills[i]}`;
      }
    }
  };
  
  var markbill = {
    name: 'Mark Taylor',
    bills: [77, 375, 110, 45],
    calcTip: function(){
      this.tips = [];
      for(let i = 0; i < this.bills.length; i++){
             if (this.bills[i] < 100){
              this.tips[i] = (this.bills[i] * 20) / 100; 
           }else if(this.bills[i]> 100 && this.bills[i] < 300){
            this.tips[i] = (this.bills[i] * 10) / 100;
           }else{
              this.tips[i] = (this.bills[i] * 25) / 100;
           }
        }
    },
    calcTotal: function(){
      this.total = [];
      for(let i = 0; i < this.tips.length; i++){
        this.total[i] = `$ ${this.tips[i] + this.bills[i]}`;
      }
    }
  };
  
  //arrow function
  let averageTip = (tip) => {
    let average = 0;
    for(let i = 0; i < tip.length; i++){
      average += tip[i];
    }
    return Math.round( average / tip.length);
  }
  
  johnbill.calcTip();
  johnbill.calcTotal();
  console.log(johnbill);
  
  markbill.calcTip();
  markbill.calcTotal();
  console.log(markbill);
  
  var higherTipAverage = (averageTip(johnbill.tips) > averageTip(markbill.tips)) ? [johnbill.name, averageTip(johnbill.tips)] : [markbill.name, averageTip(markbill.tips)];
  
  console.log(`${higherTipAverage[0]} paid more tips on average $ ${higherTipAverage[1]}`)
  