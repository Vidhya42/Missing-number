'use strict';
let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayResult=function(message){
    document.querySelector('.result').textContent=message;
}
document.querySelector('#check').addEventListener('click', function(){
    const guessnum = Number(document.querySelector('#num').value);
    if(!guessnum){
        displayResult('😒 No number entered');
    }else if(guessnum === number){
        displayResult('😍 Correct number');
        if(highscore<score){
            highscore=score;
        }else{
            highscore=highscore;
        }
        document.querySelector('.highscore').textContent=highscore;
        document.querySelector('body').style.backgroundColor=' #28ef39';
        document.querySelector('#num').style.backgroundColor=' #28ef39';
        document.querySelector('.guess1').textContent=number;

    }else if(guessnum !== number){
        displayResult((guessnum>number)?'📈 Too high':'📉 Too low');
        score--;
        if(score<=0){
            displayResult('You lose 😭');
            document.querySelector('.score1').textContent=0;
        }else{
            document.querySelector('.score1').textContent=score;
        }
    }

});

document.querySelector('.rematch').addEventListener('click', function(){
    displayResult('Start guessing...');
    score=20;
    number = Math.trunc(Math.random()*20)+1
    document.querySelector('.score1').textContent=score;
    document.querySelector('.highscore').textContent=highscore;
    document.querySelector('.guess1').textContent='?';
    document.querySelector('#num').value='';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('#num').style.backgroundColor='black';

});