/**
 * /////////////////////////////
// CODING CHALLENGE 7


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){
    var Question = function (question, options, correctAnswer){
    this.question = question;
    this.options = options;
    this.correct = correctAnswer;
  }
    Question.prototype.makeQuestion = function(score){
       
      var number = prompt(`${this.question} \n 0.${this.options[0]} \n 1. ${this.options[1]} \n 2.finish`);
      this.checkAnswer(number, score);
    }
    Question.prototype.checkAnswer = function(number, score){
        switch(this.options[number]){
            case  this.correct: 
               score ++;
                    console.log('CORRECT \n your scrore is: ' + score);
          
                    var keep = Math.floor(Math.random() * 3);
                     questions[keep].makeQuestion(score);
                    break;

            case 'exit': break;

            default:  console.log('INCORRECT but your score keep in: ' + score);
                      var keep = Math.floor(Math.random() * 3);
                      questions[keep].makeQuestion(score);
              break;
              
          }
        
      
    }
     var questions = [];
     var question1 = new Question('JS stand for?', ['JavaScript', 'Juventud Sandinista','exit' ], 'JavaScript');
    var question2 = new Question('El nacatamal se come con?', ['tortilla', 'pan', 'exit'], 'pan');
    var question3 = new Question('are you human?', ['yes', 'no', 'exit'], 'yes');
      
    questions.push(question1);
    questions.push(question2);
    questions.push(question3);
    
    var random = Math.floor(Math.random() * 3);
    questions[random].makeQuestion(0);//0 is for  intial value of score.
  
  })();
  