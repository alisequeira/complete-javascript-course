//  BUDGET CONTROLLER
var budgetController = (function(){//module pattern is that it return an object containing all of the functions that we want to be public.
    
})();

// UI CONTROLLER
var UIController = (function(){
    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function (){
            return {
                type: document.querySelector(DOMString.inputType).value,//will be either inc or exp
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value,
            }
            
        },
        getDOMStrings: function(){
            return DOMString;
        }

    };
})();

//The two modules created by now are completely independent modules. So there will not be any interaction between these two

// GLOBAL APP CONTROLLER
var controller = (function( budgetCtrl, UICtrl){
//modules can also recive arguments. we'll pass the ohter two modules as arguments, so this module knows about the other two and can connect them
    var DOM = UICtrl.getDOMStrings();

    var CtrlAddItem = function (){
        // 1. Get the filed input data.

            var input = UICtrl.getInput();
            console.log(input);
        //2.  Add the item to the budget controller.
        //3. Add the item to the UI.
        //4. Calculate the budget
        //5. display the budget control to the UI.
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', CtrlAddItem);

    document.addEventListener('keypress', event =>{
        if(event.keyCode === 13 || event.which === 13){
            CtrlAddItem();
        }
    });
})(budgetController, UIController);