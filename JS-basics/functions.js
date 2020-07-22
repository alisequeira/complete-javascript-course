/********************************
 * FUNCTIONS
 */

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