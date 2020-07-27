var budgetController = (function(){//module pattern is that it return an object containing all of the functions that we want to be public.
    
    var x = 23;

    var add = function(a){
        return x + a;
    }

    return{
        publicTest: function(b){
            return add(b);
        }
    }
})();

var UIController = (function(){
    //some code
})();

//The two modules created by now are completely independent modules. So there will not be any interaction between these two

var controller = (function( budgetCtrl, UICtrl){
//modules can also recive arguments. we'll pass the ohter two modules as arguments, so this module knows about the other two and can connect them

   var z =  budgetCtrl.publicTest(5);
        return{
            anotherPublicTest: function(){
                console.log(z);
            }
        }

})(budgetController, UIController);