/*************************
 *   LET AND CONST VARIABLED
 */

 //ES5
    var name5 = 'Ali Sequeira';
    var age5 = 23;
    name5 = 'Jorgell Obregon';
    console.log(name5); 

//ES6
    const name6 = 'Ali Sequeira';
    let age6 = 21;
    /* 
    name6 = 'Jorgell Obregon';
    console.log(name6);  //TYPE ERROR: Assigment to constant variable;
    */

//ES5
    function driversLicense5(passedTest){
        if(passedTest){
            var firstName = 'Jorgell';
            var yearOfBirth = 1999;

                console.log(firstName + ', born in ' + yearOfBirth + ' is now offically allowed to drive a car');
        }
    };
    driversLicense5(true);

//ES6
    function driversLicense6(passedTest){
        if(passedTest){
            let firstName = 'Ali';
            const yearOfBirth = 1999;

            console.log(firstName + ', born in ' + yearOfBirth + ' is now offically allowed to drive a car');
        }
    };
    driversLicense6(true);

    let i = 25;
        for(let i = 0; i < 5; i++){
            console.log(i);//0 2 3 4 
        }
    console.log(i); //25

    /*----------------------------------------------------------- */

    var j = 25;
        for(var j = 0; j < 5; j ++){
            console.log(j); // 0 1 2 3 4
        }
    console.log(j); // 5