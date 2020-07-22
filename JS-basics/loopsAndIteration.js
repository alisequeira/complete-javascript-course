/*****************************
 * LOOPS AND ITERATION
 */

 //for loop

    var john = ['john', 'Smith', 1990, 'designer'];
    for(let i = 0; i < john.length; i++){
        console.log(john[i]);
    }

    //while loop
    var i = 0
    while(i < john.length){
        console.log(john[i]);
        i++;
    }

    //continue and break statements
    var john = ['john', 'Smith', 1990, 'designer'];
    for(let i = 0; i < john.length; i++){
        if(typeof john[i] !== 'string') continue;//continues allow you to skip one iteration.
        console.log(john[i]);

    }

    var john = ['john', 'Smith', 1990, 'designer'];
    for(let i = 0; i < john.length; i++){
        if(typeof john[i] !== 'string') break;//break stop the entire loop execution.
        console.log(john[i]);
    }

    //little challenge 
    //print the output of john array the other way around

    var john = ['john', 'Smith', 1990, 'designer'];
    for(let i = john.length -1 ; i >= 0;   i--){
        console.log(john[i]);
    }