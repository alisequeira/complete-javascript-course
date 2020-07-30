/***********************
 *  CLASSES
 */

    //ES5 
        /*
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
        */
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

            //const fer = new Person('fernanda', 2000, 'student');
            //fer.calcuateAge();
        }

    /////////////////////SUBCLASSES//////////////////////////////

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

    var Athelte = function(name, yearOfBirth, job, olympicGames, medals ){
        Person.call(this, name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    Athelte.prototype = Object.create(Person.prototype);
    Athelte.prototype.wonMedal = function(){
        this.medals ++;
        console.log(this.medals);
    }

    var mich = new Athelte('ali', 1999, 'Developer', 150, 100);

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

        class Athelte extends Person{
            constructor(firstName, yearOfBirth, job,olympicGames, medals){
                super(firstName, yearOfBirth, job);
                this.olympicGames = olympicGames;
                this.medals = medals;
            }
            wonMedal(){
                this.medals ++;
                console.log(this.medals);
            }
        }

        const fer = new Athelte ('fernanda', 2000, 'boxer', 10, 50);   
        fer.calcuateAge();
        fer.wonMedal();
    }