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
            let ages6 = years.map(el => 2025 - el);//One argument no need parenthesis. One line of code no need return statement.
        console.log(ages6);
        
            ages6 = years.map((el, index) => `Ages element ${index + 1}: ${2020 - el}.`); // more than 1 argument use parenthesis
        console.log(ages6);

            ages6 = years.map((el,index) => {//more than one line of code need curly bracket and return statemen.
                const now = new Date().getFullYear();
                const age = now - el;
              return  `Ages element ${index + 1}: ${age}.`;
            })
        console.log(ages6);

////////////////////////////THIS KEYWORD////////////////////////////////
/*
    Arrow function share the sorrunding this keyword, 
    this means unlike normal functions, arrow functions don't get their own 'this' keyword.
    They simple use the 'this' keyword of the function that they're written in.
    So they have LEXICAL THIS VARIABLE
 */
       
    //ES5
        var box5 = {
            color: 'green',
            position: 1,
            clickMe: function(){
                var self = this;
                document.querySelector('.green').addEventListener('click', function(){
                    //this keyword in regular function point at the global object.
                   var str = 'This is box number ' + self.position + ' and it is ' + self.color + ' color.'
                   alert(str);
                });
            }
        };
       // box5.clickMe();
    //ES6
    const box6 = {
        color: 'green',
        position: 1,
        clickMe: function(){
            document.querySelector('.green').addEventListener('click', () => {
                //this keyword in arrow function points at the sorrunding object, which in this case is box6
               var str = 'This is box number ' + this.position + ' and it is ' + this.color + ' color. ES6'
               alert(str);
            });
        }
    };
    box6.clickMe();

    const box66 = {
        color: 'green',
        position: 1,
        clickMe: () => {
            //in this arrow function besides is a method of the object, the this keyword point to the sorrunding object which is the global.
            document.querySelector('.green').addEventListener('click', () => {
               var str = 'This is box number ' + this.position + ' and it is ' + this.color + ' color. ES6'
               alert(str);
            });
        }
    };
   // box66.clickMe();// UNDEFINED AGAIN!

   //ES5
   function Person (name){
       this.name = name;
   }
   Person.prototype.myFriends5 = function (friends){
        var arr = friends.map(function(el){
            return this.name + ' is friend with ' + el;
        }.bind(this));//use bind to attach the correct this keyword
        console.log(arr);
   }

   var friends = ['sergio', 'Jasson', 'Felix'];
   new Person('Ali').myFriends5(friends)

   //ES6
   
Person.prototype.myFriends6 = function (friends){
     var arr = friends.map((el) =>{
         return this.name + ' is friend with ' + el + ' ES6';
     });
     console.log(arr);
}

var friends = ['sergio', 'Jasson', 'Felix'];
new Person('Ali').myFriends6(friends)
            