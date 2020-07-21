/**********************
 * CODING CHALLENGE 2
 * 
 * John and Mike both play basketball in different teams. in the lastest 3 games, John's team scored 89, 
 * 120 and 103 points, while mike's team scored 116, 94, and 123 points.
 * 
 * 1. Calculate the average score for each team 
 * 2. decide which team wins in average(highest avarage score), and print the winner to the console.
 * Also include the average scored in the output. 
 * 3. Then change the score to show different winners. Don't forget to take into account there might be a draw
 * 
 * 
 * 4. EXTRA: Mary also play basketball, and her team scored 97, 134, and 105 points. Like before, log the average
 * winner to the console. HINT: you will need the && operator to take the decision.
 */

 var johnTeamAveragePoints = (89 + 120 + 103) / 3;
 var mikeTeamAveragePoints = (116 + 94 + 123) / 3;

 if(johnTeamAveragePoints > mikeTeamAveragePoints){
     console.log('john\'s team win!' + ' with an average of ' + johnTeamAveragePoints + ' points');
 }else if(johnTeamAveragePoints < mikeTeamAveragePoints ){
    console.log('Mike\'s team win!' + ' with an average of ' + mikeTeamAveragePoints + ' points');
 }else{
     console.log('there is a draw of ' + johnTeamAveragePoints + ' points');
 }

 //EXTRA

 var maryTeamAveragePoints = (97 + 134 + 105) / 3;

 switch(true){
     case johnTeamAveragePoints > mikeTeamAveragePoints && johnTeamAveragePoints > maryTeamAveragePoints:
        console.log('john\'s team win!' + ' with an average of ' + johnTeamAveragePoints + ' points'); 
        break;
     case mikeTeamAveragePoints > johnTeamAveragePoints && mikeTeamAveragePoints > maryTeamAveragePoints:
        console.log('Mike\'s team win!' + ' with an average of ' + mikeTeamAveragePoints + ' points');
        break;
     case maryTeamAveragePoints > johnTeamAveragePoints && maryTeamAveragePoints > mikeTeamAveragePoints:
        console.log('Mary\'s team win!' + ' with an average of ' + maryTeamAveragePoints + ' points');
        break;
    default: console.log('there is a draw of ' + johnTeamAveragePoints + ' points');
 }

