/*************************************
 * BIND, CALL AND APPLY
 */

 //This methods allow to call a function and set the this variable manually.

    var jor = {
        name: 'Jorgell',
        age: 21,
        job: 'student',
        presentation: function (style, timeOfDay){
            if(style === 'formal'){
                console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
            }else if(style === 'friendly'){
                console.log('hey! what\'s Up  I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old have a nice ' + timeOfDay + ' .');
            }
        }
    }
    
    var fer = {
        name: 'Fernanda',
        age: '19',
        job: 'Student'
    };
//CALL METHOD
    //jor.presentation('formal', 'evening');
    //jor.presentation.call(fer, 'friendly', 'morning');//here i borrowed the presentation method from jor object and call allow me to set the this variable in the first argument.

//APLY METHOD
    jor.presentation.apply(fer, ['formal', ' night']);//apply is similar to call method with the only difference that apply accept the arguments as an array .


//BIND METHOD
    /*
        Bind is similar to call method, it also allow us to  set the this variable explicitly 
        however the diffrences heres is that bind doesn't immediately call the function,
        but instead create a copy of the function
     */
//create a variable that will contain the method as a function.(it's not necessary set the method arguments, bind only return the function)
     var jorFriendly = jor.presentation.bind(jor);
     jorFriendly('friendly','mornig');
