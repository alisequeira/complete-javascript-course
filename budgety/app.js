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

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach((cur)=>{
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
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
        calculateBudget: function (){
            //Calculate total income and expenses

            calculateTotal('exp');
            calculateTotal('inc');

            //Calculate the budget: income - expenses
            
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentage of income that we spend
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
           
        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel:'.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
    };
    return {
        getInput: function (){
            return {
                type: document.querySelector(DOMString.inputType).value,//will be either inc or exp
                description: document.querySelector(DOMString.inputDescription).value,
                value: parseFloat(document.querySelector(DOMString.inputValue).value),
            }
            
        },
        addListItem: function (obj, type){
            var html, newHTML,element;
            //create HTML string with placeholder text
            if(type === 'inc'){
                element = DOMString.incomeContainer;
                html =  `<div class="item clearfix" id="inc-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value">%value%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`
            }else if (type === 'exp'){
                element = DOMString.expensesContainer;
                html =  `<div class="item clearfix" id="exp-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value">%value%</div>
                    <div class="item__percentage">%percentage%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`
            }
            
            //replace the placeHolder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);

            //insert the HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },
        clearFields: function(){
            var fields, fieldsArray;
            //querySelectorALL return a lis. in order to clear the placeholders is better work with array
           fields = document.querySelectorAll(DOMString.inputDescription + ', ' + DOMString.inputValue);
         
           //using the prototype property of array + call method we can convert the list into an array
          fieldsArray = Array.prototype.slice.call(fields);
          fieldsArray.forEach(current => {
              current.value = " ";
          });
          fieldsArray[0].focus();
        },
        displayBudget: function (obj){
            document.querySelector(DOMString.budgetLabel).textContent = '+ ' + obj.budget;
            document.querySelector(DOMString.incomeLabel).textContent = '+ ' + obj.totalInc;
            document.querySelector(DOMString.expensesLabel).textContent = '- ' + obj.totalExp;
            

            if(obj.percentage > 0){
                document.querySelector(DOMString.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMString.percentageLabel).textContent = '---';
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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }
    var updateBudget = function(){
         //1. Calculate the budget
            budgetCtrl.calculateBudget();
        //2. return the budget
            var budget = budgetCtrl.getBudget();
        //3. display the budget control to the UI.
        UICtrl.displayBudget(budget);
    }


    var CtrlAddItem = function (){
        var input, newItem;
        // 1. Get the filed input data.

             input = UICtrl.getInput();
            console.log(input);

            if(input.description !== "" && !isNaN(input.value) && input.value > 0){
                //2.  Add the item to the budget controller.
                newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
                //3. Add the item to the UI.
                UICtrl.addListItem(newItem, input.type);
            }
       
        //4. Clear the fields
        UICtrl.clearFields();
        //5. calculate and update budget
        updateBudget();
    
    }

        var ctrlDeleteItem =  function (event){
            var itemID, splitID, type, ID;
        //In event delegation, an event bubble up, so we can know where it was fire, by looking at target property of event
            
         itemID =  event.target.parentNode.parentNode.parentNode.parentNode.id;//DOM TRAVERSE: parentNode we can say that we want the parent node of this target
            if(itemID){
                splitID = itemID.split('-');
                type = splitID[0];
                ID = splitID[1];

                // 1. delete the item from the data structure
                // 2. delete the item from UI
                // 3. update and show the new budget
            }
        }

   return {
       init: function(){
        UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
        });
           setUpEventListener();
       }
   };
})(budgetController, UIController);

controller.init();
