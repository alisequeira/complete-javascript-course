/*******************************
 *  BLOCKS AND IIFES
 */
    //ES6

    {//block
        const a = 1;
        let b = 2;
    }
       // console.log(a + b);  // reference error: a is not define

    // ES5 
        (function (){
            var c = 3;
        })();

           // console.log (c); //reference error: a is not define