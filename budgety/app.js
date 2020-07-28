//  BUDGET CONTROLLER
var budgetController = (function(){//module pattern is that it return an object containing all of the functions that we want to be public.
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }else{
            this.percentage = -1;
        }
      
    };
    Expense.prototype.getPercentage = function (){
        return this.percentage;
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
        deleteItem: function(type, id){
            var ids,index;
            //id = 6
            //data.allItems[type][id];
            // ids = [1 2 4 6 8]
            //idex = 3

           ids =  data.allItems[type].map(current => {
                return current.id; 
            });
            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }

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
        calculatePercentage: function (){
            data.allItems.exp.forEach(current => {
                current.calcPercentage(data.totals.inc);
            });
        },
        getPercentage: function(){
           var allPercentage = data.allItems.exp.map(current => {
               return current.getPercentage();
           });
           return allPercentage;
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
        container: '.container',
        expensesPercLabel: '.item__percentage' ,
        dateLabel: '.budget__title--month'
    };
   var formatNumber = function(num, type){
        var numSplit, int, dec;
        /*
            + or - before number
            exactly 2 decimal points
            comma separating the thousands
            3210.4567 -> 2,310.46
         */

         num = Math.abs(num);
         num = num.toFixed(2);

         numSplit = num.split('.');
         int = numSplit[0];
         dec = numSplit[1];
         if(int.length > 3){
            int = int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3 , 3);//input 2310 output 2,310
         }
         dec = numSplit[1] ;
         

         return (type === 'exp' ? '-' : '+') + int + '.' +dec; 
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
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>`
            }
            
            //replace the placeHolder text with some actual data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', formatNumber(obj.value,type));

            //insert the HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },
        deletelistItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);//removechild: delete the child of the parent node selected

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
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMString.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMString.incomeLabel).textContent =  formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMString.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            

            if(obj.percentage > 0){
                document.querySelector(DOMString.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMString.percentageLabel).textContent = '---';
            }


        },
        displayPercentages: function (percentages){
            var fields = document.querySelectorAll(DOMString.expensesPercLabel);

            var nodeListForEach = function (list,callback){
                for(var i = 0; i < list.length; i++){
                    callback(list[i],i);
                }
            };

                nodeListForEach(fields, (current,index) =>{
                    if(percentages[index] > 0){
                        current.textContent = percentages[index] + '%';
                    }else{
                        current.textContent = '---';
                    }
                    
                });
        },
        displayMonth: function(){
            var now, year, month, months;
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decebember']
                 now = new Date();
                month = now.getMonth();
                 year = now.getFullYear();
                 document.querySelector(DOMString.dateLabel).textContent = months[month] + " " +year;
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
    var updatePercentages =  function(){
        // 1. calculate the percentage
            budgetCtrl.calculatePercentage();
        // 2. read from the budget controller
           var percentage = budgetCtrl.getPercentage();
        // 3. update the UI with the new percentages
        UICtrl.displayPercentages(percentage);
    };

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
        // 6. update Percentage
        updatePercentages();
    }

        var ctrlDeleteItem =  function (event){
            var itemID, splitID, type, ID;
        //In event delegation, an event bubble up, so we can know where it was fire, by looking at target property of event
            
         itemID =  event.target.parentNode.parentNode.parentNode.parentNode.id;//DOM TRAVERSE: parentNode we can say that we want the parent node of this target
            if(itemID){
                splitID = itemID.split('-');
                type = splitID[0];
                ID = parseInt(splitID[1]);

                // 1. delete the item from the data structure
                    budgetCtrl.deleteItem(type, ID);
                // 2. delete the item from UI
                UICtrl.deletelistItem(itemID);
                // 3. update and show the new budget
                updateBudget();
                //4. update percentage
            }
        }

   return {
       init: function(){
        UICtrl.displayMonth();
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
