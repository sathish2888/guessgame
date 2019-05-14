let randomnumber = Math.floor(Math.random() * 100) + 1;

const guesses     = document.querySelector('.guesses');
const lastResult  = document.querySelector('.lastResult');
const lowOrHi     = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField  = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
/*
build the logic for first guess, 10th guess and correct guess
*/
function checkGuess() {
    let userGuess = Number(guessField.value);
if (guessCount === 1) {
    guesses.textContent = 'Previous guesses:';
}    
guesses.textContent += userGuess + ' ';
if (userGuess === randomnumber) {
    lastResult.textContent = 'Congratulations you got it right';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
} else if (guessCount === 10) {
    lastResult.textContent = 'Game Over';
    setGameOver();
} else{
    lastResult.textContent = 'Wrong';
    lastResult.style.backgroundColor = 'red';
    if ( userGuess < randomnumber ) {
        lowOrHi.textContent = 'your guess is low';
    }
    else
    {
        lowOrHi.textContent = 'your guess is high';
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
    }
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){

    guessField.disabled  = 'True';
    guessSubmit.disabled = 'True';
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p'); //it gives the paragraph and it's length it seems
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
//Clearing the contents
    lastResult.textContent = '';
    lastResult.style.backgroundColor = 'white';
    guesses.textContent = '';
    randomnumber = Math.floor(Math.random() * 100) + 1;
}