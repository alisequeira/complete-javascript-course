/*********************
 * STRINGS IN ES6
 */

    let firstName = 'Ali';
    let LastName = 'Sequeira';
    const yearOfbirth = 1999;

        function calcAge(year){
            return 2020 - year;
        }

//ES5
    console.log('This is ' + firstName + ' ' + LastName + ' He was born in ' + yearOfbirth + 
    '. Today he is ' + calcAge(yearOfbirth) + ' years old \n (ES5)');

//ES6   TEMPLATE LITERAL
    console.log(`This is ${firstName} ${LastName} He was born in ${yearOfbirth}. Today he is ${calcAge(yearOfbirth)} years old \n (ES6)`);

//NEW STRINGS METHODS

        const n = `${firstName} ${LastName}`;

         console.log(n.startsWith('A')); //return is the string start with A (true / false)
         console.log(n.endsWith('a'));   // return is the string ends with a (true / false)
         console.log(n.includes('Se'));   // return is the strin has Se  (true / false)
         console.log(`${firstName} `.repeat(5)); //repeat the string the time specific