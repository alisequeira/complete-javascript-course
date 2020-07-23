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

    var scores, roundScore, activePlayer, dice;
     scores = [0,0];
     roundScore = 0 ;
     activePlayer = 0;// 0 is for first player / 1 is for second player

     dice = Math.floor(Math.random() * 6) + 1; //gettin random number for the dice.
     console.log(dice);

     document.querySelector('#current-' + activePlayer).textContent = dice;//textContext only set plain text
     document.querySelector('.dice').style.display = 'none';//maipulating css