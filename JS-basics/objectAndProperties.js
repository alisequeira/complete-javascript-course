/****************************
 * OBJECTS AND PROPERTIES
 */

    //object literal
    var john = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Emily','Bob', 'Mark'],
        job: 'teacher',
        isMarried: false
    };
    console.log(john);
    console.log(john.firstName);
    console.log(john['lastName']);
    var x  = 'birthYear';
    console.log(john[x]);

    john.job = 'desingner';
    john['isMarried'] = true;
    console.log(john);

    //New Object Syntax

    var jane = new Object();
    jane.firstName = 'Jane';
    jane.birthYear = 1969;
    jane['lastName'] = 'Smith';
    console.log(jane);