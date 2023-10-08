const random = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#sub');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess =[]
let numGuess = 1

let playGame = true
 
 if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
        
        })
 }

function validateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a valid guess')
}else if(guess < 1){
    alert('Please enter a number more than 1')
}else if(guess > 100){
     alert('Please enter a number less than 100');
}else{
    prevGuess.push(guess);
    if(numGuess === 11){
displayGuess(guess);
displayMessage(`game over .random number are ${random}`);
endGame();
    }else{
          displayGuess(guess);
          checkGuess(guess);
    }
}
}

function checkGuess(guess){
    if(guess === random){
        displayMessage('you win');
        endGame();
    }else if(guess < random){
        displayMessage('you are tooo low')
}else if(guess > random){
    displayMessage('you are tooo High')

}}

function displayGuess(guess){
     userInput.value = '';
     guessSlot.innerHTML += `${guess},   ` ;
     numGuess++;
     remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame(){
 userInput.value ="";
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML = `<h2 id="newGame>start new game</h2>`;
 startOver.appendChild(p);
 playGame = false;
 newGame();
}
function newGame(){
 const newGameButton = document.querySelector('#newGame');
 newGameButton.addEventListener('click',function(){
    remaining.innerHTML = `${11 - numGuess}`;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
userInput.removeAttribute('disabled')
startOver.removeChild(p)
playGame= true;
 })
}
