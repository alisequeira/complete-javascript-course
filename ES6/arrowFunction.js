/******************
 * ARROW FUNCTIONS
 */

    const years = [1990, 1965, 1982, 1937];
    
        //ES5
            var ages5 = years.map(function(el){
                return 2020- el;
            });
        console.log(ages5);

        //ES6
            let ages6 = years.map(el => 2025 - el);
        console.log(ages6);
        
            ages6 = years.map((el, index) => `Ages element ${index + 1}: ${2020 - el}.`);
        console.log(ages6);

            ages6 = years.map((el,index) => {
                const now = new Date().getFullYear();
                const age = now - el;
              return  `Ages element ${index + 1}: ${age}.`;
            })
        console.log(ages6);
