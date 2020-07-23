/**
    GAME RULES:

    -The game has 2 players, playing in rounds.
    -In each turn, a player rolls a dice as many times as he whishes. Each resul get added to his round score
    -But, if the player roll a 1, all his ROUND score gets lost. After that, it's the next player's that turn
    -The player can choose to 'hold', which means that is round scored gets added to his global scrore. After that
    it's the next player's turn.
    /The first player to reach 100 points on global score wins the game.
 */

 //DOM ACCESS AND MANIPULATION

    var scores, roundScore, activePlayer;
     scores = [0,0];
     roundScore = 0 ;
     activePlayer = 0;// 0 is for first player / 1 is for second player

     document.querySelector('.dice').style.display = 'none';//maipulating css
     document.getElementById('score-0').textContent = '0';
     document.getElementById('score-1').textContent = '0';
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

//EVENTS AND EVENT HANDLING 

    document.querySelector('.btn-roll').addEventListener('click', ()=>{//callback function
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1; //gettin random number for the dice.
       

        //2. Display the result
        var diceDOM =  document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png'; 
            
            

        //3. update the round score IF the rolled number was not 1
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active'); 
            (activePlayer === 0)? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none';
        }
    });