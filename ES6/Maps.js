/************************ 
* MAPS
*/
    /*
        Map is a new key-value data structure in ES6, one od the big difference is that in map
        we can use anything for the keys. In object we are limited to use only string.
        But in map we can use any kind of primitive values like number, string o boolean,
        and we can use object or functions as keys.
     */

     const question = new Map(); //create a map
        //Adding data   //key                     //value
          question.set('question', 'What is the official name of the latested major JavaScript version?');  
          question.set(1, 'ES5');
          question.set(2, 'ES6');
          question.set(3, 'ES2015');
          question.set(4, 'ES7');
          question.set('correct', 3);
          question.set(true, 'correct answer :D')
          question.set(false, 'wrong please try again!');

        //Retrieve data from the map
           console.log(question.get('question')); 
        //With map we can also get the size or the length
           //console.log( question.size);

        /*
        //Delete and check Data
            if(question.has(4)){
                question.delete(4);
            }
        //delete all the map.
        question.clear();
        */
       
//With map we can loop through them
            //question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

            for(let [key, value] of question.entries()){//entries return all entries of our questions map(we can use destructuring to store the key)
                if(typeof(key) === 'number'){
                    console.log(`Asnwer ${key}: ${value}`);
                }
            }
            const ans = parseInt(prompt('Write the correct answer'));
           console.log( question.get(ans === question.get('correct'))); //display correct if the statement is true 