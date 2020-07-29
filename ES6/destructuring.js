/**************************
 *  DESTRUCTURING
 */

 /*
    Destructuring gives us a very convenient way to extract data from a data structure
    like an object or an array.
  */

    //ES5
        var john = ['john', 26];
        var name = john[0];
        var age = john[1];

    //ES6
        //we can destructure a data structure just like this.
       {
        const [name, age] = ['john', 21]; // here I created a constant called name and other called age. And then the data will be store on the variables.
        console.log(name);
        console.log(age);

            const obj = {
                firstName: 'ALI',
                lasteName: 'SEQUEIRA'
             };
            const {firstName, lasteName} = obj;
                console.log(firstName);
                console.log(lasteName);

            const {firstName: a , lasteName: b} = obj; 
            console.log(a);
            console.log(b);
        }
////////////////WE CAN USE DESTRUCTURING TO RETURN MULTIPLE VALUES FROM A FUNCTION/////////////
{
    function calcAgeRetirement (year){
        const age = new Date().getFullYear() - year;
        return [age, 65 - age];
    }
        const [age,retirement] = calcAgeRetirement(1999);
        console.log(age);
        console.log(retirement);
}