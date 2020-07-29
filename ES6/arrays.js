/***********************
 * ARRAYS
 */

    const boxes = document.querySelectorAll('.box');

    //ES5
    
        var boxesArray5 = Array.prototype.slice.call(boxes);
        boxesArray5.forEach(function(cur){
            cur.style.backgroundColor = 'dodgerblue';
        });

      //ES5
      for(var i = 0; i < boxesArray5.length; i++){
        if(boxesArray5[i].className === 'box blue'){
            continue;
        }else{
            boxesArray5[i].textContent = ' I changed to blue';
        }
      }
    
    //ES6
        {
            const boxesArray6 = Array.from(boxes);//from will transform the node list of boxes into a array.
            boxesArray6.forEach(cur =>  cur.style.backgroundColor = 'dodgerblue');

            //FOR OF
                for(const cur of boxesArray6){//allow to use break of continues
                    if(cur.className === 'box blue'){
                        continue;
                    }else{
                        cur.textContent = 'name changed by ES6'
                    }
                }
        }

    //ES5
        var ages = [12, 17, 8, 21, 14, 11];
        
            var fullAges = ages.map(function(cur){
                return cur >= 18;
            })
            console.log(fullAges);
            console.log(fullAges.indexOf(true));
            console.log(ages[fullAges.indexOf(true)]);
        
    //ES6 
    {
        //findIndex method we can pass a callback function into it and it's gonna return the index of the array where the callback return true
       console.log( ages.findIndex(cur => cur >= 18));
       console.log(ages[ages.findIndex(cur => cur >= 18)]);

    }