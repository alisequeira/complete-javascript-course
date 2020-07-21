/*********************
 * CONDITIONALS IF/ELSE STATEMENTS
 */

 var firstName = 'John';
 var civilStatus = 'single';

 if(civilStatus === 'married'){
     console.log(firstName + ' is married!');
 }else{
     console.log(firstName + ' we hopefully marry soon :)');
 }

 var isMarried = true;

 if(isMarried){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' we hopefully marry soon :)');
}

/*************************
 * BOOLEAN LOGIC
 */

 var firstName = 'john';
 var age = 16;

 if(age < 13){
     console.log(firstName + ' is a boy.')
 }else if(age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.')
 }else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.')
 }else{
     console.log(firstName + ' is a man.');
 }

 /***********************
  * THE TERNARY OPERATOR AND SWITCH STATEMENTS
  */

  //ternary operator 
 /**
  * same like if(conditonal){
  *     ...
  *  }else{
  *     ...
  *   }
  */
  var firstName = 'John';
  var age = 18;

  age >= 18 ? console.log(firstName + ' drinks beer') : console.log( firstName + ' drinks juice'); 
  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

  //switch statement
  
  var job = 'instructor';
    
    switch(job){
        case 'instructor'://will work perfectly whether is instructor or teacher
        case 'teacher': console.log(firstName + ' teaches kids how to code');
                        break;
        case 'driver':  console.log(firstName + ' drive an uber in lisbon.');
                        break;
        case 'designer': console.log(firstName + ' designs beautiful websites');
                        break;
        default: console.log(firstName + ' does something else');
    }

    //the same example above now using switch

    age = 56;
    switch(true){
        case age < 13:  console.log(firstName + ' is a boy.');
                            break;
        case age >= 13 && age < 20: console.log(firstName + ' is a teenager.');
                                        break;
        case age >= 20 && age < 30:  console.log(firstName + ' is a young man.');
                                        break;
        default:   console.log(firstName + ' is a man.');
    }