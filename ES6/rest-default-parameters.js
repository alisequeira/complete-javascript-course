/*****************
 * REST AND DEFAULT PARAMETERS
 */

 //REST PARAMETERS
 /*
    Rest parameters allow us to an arbitrary number of arguments into a function, and use this arguments into the function
    Similar to spread operator (using ...) but rest parameters are the exact  opposite of spread operator
    that is because spread operator take an array an transforms it into single values, while rest parameters recive single values 
    and transforms them into an array when we call a function with multiple parameters.

    THE DIFFERENCE BETWEEN SPREAD OPERATOR AND REST PARAMETERS IS THE PLACE IN WHICH WE USE EACH OF THEM
        spread operator is used in function calls while rest operator is used in function declaration.
  */

    //ES5
        //in es5 if we want to recive a number of arguments then we do not simply define any parameters for our function
            //and just use the arguments keyword
        function isFullAge(){
            var argsArr = Array.prototype.slice.call(arguments);

                argsArr.forEach(function(cur) {
                    console.log((2016 - cur) >= 18);
                });
        }
        isFullAge(1990, 1999, 1965);

    //ES6
        {
            function isFullAge(...years){//rest arguments is gonna take the three values passed as argument and transforms them into an array
                years.forEach(cur => {
                    console.log((2020 - cur) >= 18)
                });
            }
            isFullAge(1990,1999,1965);
        }
        {
            function isFullAge (limit,...years){//first value is the limit, not necessary in years, so we add a parameter for that value and then use rest arguments. 
                years.forEach(cur => {
                    console.log((2016 - cur) >= limit);
                });
            };
            isFullAge(21, 1990, 1999, 1965);
        }