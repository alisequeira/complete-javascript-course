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