/********************************
 * FUNCTIONS
 */
//function statements
 function calculateAge(birthYear){
     return 2020 - birthYear;
 }

 var ageJohn = calculateAge(1999);
 console.log(ageJohn);

 function yearsUntilRetirement(year, firstName){
     var age =  calculateAge(year);
     var retirement = 65 - age;
     if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');
     }else{
        console.log(firstName + ' is already retired');
     }
     
 }

 yearsUntilRetirement(1999, 'Jorgell');
 yearsUntilRetirement(1935, 'Ali');

 /****************************
  * FUNCTION STATEMENTS AND EXPRESSIONS
  */

  //function expression

  var whatDoYouDo = function(job, firstName){
      switch(job){
          case 'teacher': 
                    return firstName + ' teaches kids how to code';
          case 'driver':
                    return firstName + ' drive an uber in lisbon';
          case 'designer':
                    return firstName + ' design beatiful websites';
          default:
                    return firstName + ' does something else'; 
      }
  }

  console.log(whatDoYouDo('teacher','john'));