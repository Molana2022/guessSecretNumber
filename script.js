'use strict';

let secretNum = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = '?';
let highScore = 0;
let score = 20;

const displayMsg = function(msg){ document.querySelector('.message').textContent = msg;};

document.querySelector('.check').addEventListener('click', function(){
    const guessNum = Number(document.querySelector('.guess').value);

    if (20 < guessNum || guessNum < 1){ displayMsg('Illegal Number!') }
    else if (guessNum === secretNum){
        displayMsg('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore){
            highScore= score;
            document.querySelector('.highscore').textContent= highScore;
        }
    }
    else if (guessNum !== secretNum) {
        if (score>1){
            displayMsg(guessNum > secretNum ? '📈Too High!' : '📉Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            displayMsg(`💥You Lost the Game!`);
            document.querySelector('.score').textContent = 0;
        }
    } 
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNum = Math.trunc(Math.random()*20) + 1;
    displayMsg('Start guessing...!');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
