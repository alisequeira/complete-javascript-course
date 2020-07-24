/*****************************
 * OBJECTS
 */

    //IN JS ALMOST EVERYTHING IS AN OBJECT

    /*
    1- Every JavaScript object has a prototype property, which makes de inheritance possible in JS
    2- The property of an object is where we put methods and properties that we want other object to inherit.
    3- The constructor's prototype property is NOT the prototype of the constructor itself, it's the prototype of all 
    instances that are created through it.
    4- When a certain method  (or property) is called, the search starts in the object itself, and if it cannot be found, the search
    moves on to the object's prototype. This continues until the method is found: PROTOTYPE CHAIN.
     */


//CREATING AN OBJECT USING FUNCTION CONSTRUTOR

    var john = {
        name: 'John',
        yearOfBirth: 1990,
        job: 'teacher'
    };

    var Person = function(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    Person.prototype.calculateAge = function(){//inheriting calculateAge method (can't use arrow function for this)
        console.log(2020 - this.yearOfBirth);
    };
    Person.prototype.lastName = 'smith';

        var john = new Person('ali', 1999, 'student');
        var jane = new Person('Jane', 1969, 'designer');
        var mark = new Person('Mark', 1948, 'retired');

        john.calculateAge();
        jane.calculateAge();
        mark.calculateAge();
    console.log(john);
    console.log(jane.lastName);
    console.log(mark.lastName);