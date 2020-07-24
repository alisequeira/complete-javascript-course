/*******************************
 * FIRST CLASS FUNCTION
 */
    // passing functions as Arguments.

    /*
        .functions is an instance of the Object type.
        .A function behave like any other object.
        .We can store function in a variable.
        .We can pass a function as an argument to another function;
        .We can return a function from a function.
    */

    var years = [1999, 1965, 1937, 2005, 1998];

    function arrayCalc (arr, fn){
        var arrRes = [];
        for(let i = 0; i < arr.length; i++){
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    function calculateAge (el){
        return 2016 - el;
    }

    function isFullAge(el){
        return el > 18;
    }

    function maxHeartRate(el){
        if(el >= 18 && el <= 81 ){
            return Math.round(206.9 - (0.67 * el));
        }else{
            return -1;
        }
       
    }

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log('ages'+' '+ages);
console.log('fullAges' + ' ' + fullAges);
console.log('maxHeartRates'+ ' ' + rates);

    

// FUNCTIONS RETURNING FUNCTIONS.

    function interviewQuestion(job){
        if(job === 'designer'){
            return name =>  console.log( name + ', can you please explain what UX design is?');
        }else if(job === 'teacher'){
                return name => console.log('What subject do you teach, ' + name + ' ?');
        }else{
            return name => console.log('hello ' + name + ', what do you do?');
        }
    }

    var teacherQuestion = interviewQuestion('teacher');//this return the previous function declaration.
    var designerQuestion = interviewQuestion('designer');
        teacherQuestion('Jorgell');
        designerQuestion('Jorgell');

