/*************************8
 * HOISTING
 */
calculateAge(1994);// it work

 function calculateAge(year){
     console.log(2020 - year);
 }

 //it won't work. hoisting is only executing in functions declaration

 //retirement(1999);
var retirement = function(year){
    console.log(65 - (2020 - year));
}
console.log(age);
var age = 23;

function foo(){
    var age = 65;
    console.log(age);//prints out 65, cuz the execution context is from foo()
}
foo();
console.log(age);//prints out 23, cuz the execution context is from the global object.


/***************************
 * SCOPING => where can we access a certain variable.
 */

var a = 'hello';
first();

function first(){
    var b = 'hi';
    second();
        function second(){
            var c = ' hey';
            third();
        }
}

function third(){
    var d = ' john';
    //console.log(c);
    console.log(a + d);
}