/*************************
 *  BASIC OPERATORS
 */
var year, yearJohn, yearMark;
var ageJohn = 28;
var ageMark = 33;

year = 2020;
//Math operators 
yearJohn = year - 28;
yearMark = year - 33;
 console.log(yearJohn);

 console.log(year + 2);
 console.log(year * 2);
 console.log(year / 10);

 //Logical Operators
 var johnIsOlder = ageJohn < ageMark;
 console.log(johnIsOlder);

 //typeof Operator

 console.log(typeof johnIsOlder);
 console.log(typeof ageJohn);
 console.log(typeof 'Mark is older than john');
 var x;
 console.log(typeof x);

 /********************************
  * OPERATOR PRECEDENCE
  */

  var now = 2020;
  yearJohn = 1989;
  var fullAge = 18;

//multiple operators
  var isFullAge = now - yearJohn >= fullAge;
  console.log(isFullAge)

//Grouping
  var ageJohn = now - yearJohn;
  var ageMark = 35;
  var average = (ageJohn + ageMark) / 2;
  console.log(average);

//multiple assigments
var x,y;
x = y = (3+5) * 4 - 6 ;
console.log(x , y);

//more operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x ++;
