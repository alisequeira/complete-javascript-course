/***************************
 * CLOSURE
 */
    /*
        SUMARY: An inner function has always access to the variables and parameters of its outer 
        function, even after the outer function has returned.
    */

    function retirement(retirementAge){
        var a = 'years left until retirement';
        return yearOfbirth =>{//this function has acces to the variables of the outer function.
            var age = 2016 - yearOfbirth;
            console.log((retirementAge - age) + a);
        }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceLand = retirement(67);

    retirementUS(1990);
    retirementGermany(1990);
    retirementIceLand(1990);

    //Rewriting the function of functions returning functions lecture, now with the power of scope!

    function interviewQuestion(job, name){
        if(job === 'designer'){
            return () => console.log(name + ', can you please explain what UX design is?');
        }else if(job === 'teacher'){
            return () => console.log('What subject do you teach, ' + name + ' ?');
        }else{
            return () => console.log('hello ' + name + ', what do you do?');
        }
    }

    var teacherQuestion = interviewQuestion ('teacher', 'ALI')();
    