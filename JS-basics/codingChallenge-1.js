/*************************
 * CODING CHALLENGE 1
 */

 /*
   Mark and John are trying to compare their BMI (body mass index), which is calculated using the formula:
   BMI = mass/ heigh^2 = mass / (heigh * heigh).
   (mass in kg and heigh in meter).
   
   1. Store mark's and John's mass and height in variables
   2.calculate both their BMIs
   3. Create a boolean variable containing information about whether mark is higher BMI than John.
   3. Print a string to the console.log containing the variable from step 3. (Something like "is Mark's BMI higher than John's? true").
  */
    var johnMass, johnHeigh, johnBMI, markHeigh, markMass, markBMI;

   johnMass = 70;
   johnHeigh = 1.80;
   johnBMI = Math.round(johnMass / Math.pow(johnHeigh,2));

   markMass = 77;
   markHeigh = 2.10;
   markBMI = Math.round(markMass / Math.pow(markHeigh,2));

  var isMarkBMIHigher = markBMI > johnBMI;
    console.log("is Mark's BMI higher than jonh's? " + isMarkBMIHigher);
