//  BUDGET CONTROLLER
var budgetController = (function(){//module pattern is that it return an object containing all of the functions that we want to be public.
    
})();

// UI CONTROLLER
var UIController = (function(){
    //some code
})();

//The two modules created by now are completely independent modules. So there will not be any interaction between these two

// GLOBAL APP CONTROLLER
var controller = (function( budgetCtrl, UICtrl){
//modules can also recive arguments. we'll pass the ohter two modules as arguments, so this module knows about the other two and can connect them

    var CtrlAddItem = function (){
           // 1. Get the filed input data.
        //2.  Add the item to the budget controller.
        //3. Add the item to the UI.
        //4. Calculate the budget
        //5. display the budget control to the UI.
        console.log('hello word');
    }

    document.querySelector('.add__btn').addEventListener('click', CtrlAddItem);

    document.addEventListener('keypress', event =>{
        if(event.keyCode === 13 || event.which === 13){
            CtrlAddItem();
        }
    });
})(budgetController, UIController);