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
} else if (guessCount === 10) {
    lastResult.textContent = 'Game Over';
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