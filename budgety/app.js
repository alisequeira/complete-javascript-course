//  BUDGET CONTROLLER
var budgetController = (function(){//module pattern is that it return an object containing all of the functions that we want to be public.
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val){
            var newItem ,ID;
            //create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }
           

            //create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem= new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val)
            }
           
            //push it into our data structure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },
        testing: function (){
            console.log(data);
        }
    };
    
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
    var setUpEventListener = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', CtrlAddItem);

        document.addEventListener('keypress', event =>{
            if(event.keyCode === 13 || event.which === 13){
                CtrlAddItem();
            }
        });
    }


    var CtrlAddItem = function (){
        var input, newItem;
        // 1. Get the filed input data.

             input = UICtrl.getInput();
            console.log(input);
        //2.  Add the item to the budget controller.
             newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
        //3. Add the item to the UI.
        //4. Calculate the budget
        //5. display the budget control to the UI.
    }

   return {
       init: function(){
           setUpEventListener();
       }
   };
})(budgetController, UIController);

controller.init();