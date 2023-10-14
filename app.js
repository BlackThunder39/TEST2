let p1Score=0;
let p2Score=0;
let winningScore = 6;
let isGameOver = false;
const p1Display= document.querySelector('#p1Display');
const p2Display= document.querySelector('#p2Display');
const p1Button= document.querySelector("#p1Button");
const p2Button= document.querySelector('#p2Button');
const resetButton= document.querySelector('#reset');
const resultDisplay= document.querySelector('#result');
const winningScoreSelector= document.querySelector('#maxScore')
const Form= document.querySelector('#input');
const FormInput=document.querySelector('#inputValue');
const alertSelector= document.querySelector('#alert');

p1Button.addEventListener('click', function (){
    if(!isGameOver){
        if(p1Score!==winningScore){
            p1Score+=1;
            p1Display.textContent = p1Score;
            if(p1Score===winningScore){
                isGameOver= true;
                p1Button.classList.toggle('disabled');
                p2Button.classList.toggle('disabled');
                p1Display.classList.add('text-success');
                p2Display.classList.add('text-danger');
                resultDisplay.textContent="PLAYER 1 WINS !!";
            }
        }
    }
});
p2Button.addEventListener('click', function (){
    if(!isGameOver){
        if(p2Score!==winningScore){
            p2Score+=1;
            p2Display.textContent = p2Score;
            if(p2Score===winningScore){
                isGameOver= true;
                p1Button.classList.toggle('disabled');
                p2Button.classList.toggle('disabled');
                p2Display.classList.add('text-success');
                p1Display.classList.add('text-danger');
                resultDisplay.textContent="PLAYER 2 WINS !!";
            }
        }
    }
});
const reset = function (){
    isGameOver= false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    resultDisplay.innerText="MATCH IS GOING ON !!!";
    p1Button.classList.remove('disabled');
    p2Button.classList.remove('disabled');
    p2Display.classList.remove('text-success');
    p1Display.classList.remove('text-danger');
    p1Display.classList.remove('text-success');
    p2Display.classList.remove('text-danger');
};


resetButton.addEventListener('click', reset );

winningScoreSelector.addEventListener('change',function (){
    if(this.value!=-1){
        winningScore= parseInt(this.value); //since string recieved
        Form.classList.add('invisible');
        alertSelector.innerText=`Winning score set to ${winningScore}`;
    }
    else{
        Form.classList.remove('invisible');
    }
    reset();
})

FormInput.addEventListener('change',function(){
    winningScore= parseInt(this.value);
    alertSelector.innerText=`Winning score set to ${winningScore}`;
    reset();
})
