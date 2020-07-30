/***********************
 *  CLASSES
 */

    //ES5
        var Person = function (name, yearOfBirth, job){
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }
        Person.prototype.calcuateAge = function(){
            var age = new Date().getFullYear() - this.yearOfBirth;
            console.log(age);
        }

        var ali = new Person('ali', 1999, 'Developer');
        ali.calcuateAge();

    //ES6
        {
            class Person{
                constructor(firstName, yearOfBirth, job){
                    this.firstName = firstName;
                    this.yearOfBirth = yearOfBirth;
                    this.job = job;
                }

                calcuateAge(){
                    let age =  new Date().getFullYear() - this.yearOfBirth;
                    console.log(age);
                }      
            }

            const fer = new Person('fernanda', 2000, 'student');
            fer.calcuateAge();
        }