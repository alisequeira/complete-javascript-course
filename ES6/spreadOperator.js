/*********************
 * SPREAD OPERATOR
 */

 /*
    spread operator is a very convinient way to expand elements of an array in place like arguments and functions call.
  */

    function addFourAges (a, b, c, d){
        return a + b + c + d;
    }
    var sum1 = addFourAges(18, 30, 12, 21);
    console.log(sum1);

    //ES5
        var ages = [18, 30, 12, 21];
        var sum2 = addFourAges.apply(null, ages);
        console.log(sum2);

    //ES6
        {
            const sum3 = addFourAges(...ages);
            console.log(sum3);

            const family1 = ['ALI', 'JORGELL', 'SEQUEIRA'];
            const family2 = ['ali', 'jorgell', 'sequeira'];
            const bigFamily = [...family1,...family2];
            console.log(bigFamily);

            //spread operator not only work on array but also on a node list
            const h = document.querySelector('h1');
            const boxes = document.querySelectorAll('.box');
            const all = [h,...boxes];
            all.forEach(cur => {
                cur.style.color = 'green';
            })
        }