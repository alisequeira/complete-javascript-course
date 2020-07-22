/**********************
 * CODING CHALLENGE 4
 */

/*
  Let's remember the first coding challenge where Mark and John compared their BMI's. Let's now implement the same functionality 
  with objects and methods. 
  1. For each of them, create an object with properties for their full name, mass, and height.
  2. Then, add a method to each object to calculate the BMI to each object and also return it from the method.
  3. in the end, log the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have
  same BMI.
  
  REMEMBER: BMI = mass / height^2 (mass in kg and height in meter)
 */

 var john = {
     firstName: 'John',
     lastName: 'Smith',
     mass: 70,
     heigh: 2.80,
     calcBMI: function(){
         this.BMI = Math.round(this.mass / Math.pow(this.heigh, 2));
     }
 }

 var mark = new Object();
 mark.firstName = 'Mark';
 mark.lastName = 'Taylor';
 mark['mass'] = 77;
 mark['heigh'] = 2.10;
 mark.calcBMI = function(){
    this.BMI = Math.round(this.mass / Math.pow(this.heigh, 2));
 }

 john.calcBMI();
 mark.calcBMI();
 
 if(john.BMI > mark.BMI){
    console.log(`${john.firstName} ${john.lastName} has a higher BMI of ${john.BMI}`);
   }else if (mark.BMI > john.BMI){
      console.log(`${mark.firstName} ${mark.lastName} has a higher BMI of ${mark.BMI}`);
   }else{
     console.log(`${john.firstName} ${john.lastName} and ${mark.firstName} ${mark.lastName} have the same BMI`);
   }

