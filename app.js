const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = 'SCISSORS';
const DefultChoiseOfUser = PAPER;
const Result_Draw = 'DRAW';
const Result_P_Win = 'YOU_WON !';
const Result_C_Win = 'PC_WON';

let gameIsRunning = false;

const getPlayerChoise = () => {
   const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
   if (
    selection !== ROCK  &&
    selection !== PAPER &&
    selection !== SCISSORS
    ) {
        alert(`Invalid choise!  I chose ${DefultChoiseOfUser} for you!`)
        return;
    }
    return selection;
};

const getComputerChoise = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34){
        return ROCK;
    } else if (randomValue < 0.67){
        return PAPER
    } else {
        return SCISSORS;
    }
};
// const theMan= {                     /* функции встроенные в обьекты называются методом addEventListener по сути также является методом который встроенн в джава скрипт*/
//    greet: function greet () {
//     console.log('Hi there !');
//    }
// };

// theMan.greet();

// console.dir(startTheGame);         //функции это обьекты

// startGameBtn.addEventListener('click', leeeGo);

const getWinner = (cChoise, pChoise = DefultChoiseOfUser) =>                   // функци стрела или arrow function 
    cChoise === pChoise 
    ? Result_Draw: 
    (cChoise === ROCK && pChoise === PAPER) || 
    (cChoise == PAPER && pChoise === SCISSORS)  ||
    (cChoise === SCISSORS && pChoise === ROCK) 
    ? Result_P_Win :
      Result_C_Win ;

    // if (cChoise === pChoise) {
    //     return Result_Draw;
    // } else if (cChoise === ROCK && pChoise === PAPER || 
    //            cChoise == PAPER && pChoise === SCISSORS  ||
    //            cChoise === SCISSORS && pChoise === ROCK
    // ){
    //  return Result_P_Win;
    // } else {
    //     return Result_C_Win;
    // }


startGameBtn.addEventListener('click',  () => {              //пример работы функции анонима 
    if (gameIsRunning){
        return;
    }
    gameIsRunning = true;
    alert('Game is strarting...');
    const playerSelection = getPlayerChoise();
    const computerChoise = getComputerChoise();
    let winner;
    if (playerSelection) {
         winner = getWinner (computerChoise,playerSelection);
    } else {
        winner = getWinner (computerChoise);
    }
    let message = `You picked ${playerSelection || DefultChoiseOfUser}, computer picked ${computerChoise} thefore your `;
    if (winner === Result_Draw) {
        message = message + 'had a draw';
    } else if (winner === Result_P_Win) {
        message = message + 'won !';
    } else {
        message = message + 'lost :('
    }
    alert(message);
    gameIsRunning = false;
});