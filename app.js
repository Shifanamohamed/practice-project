let result = document.querySelector("#result")
let output1 = document.querySelector("#ouput1")
let output2 = document.querySelector("#ouput2")
let startbtn = document.querySelector("#start-btn")
let resetbtn = document.querySelector("#reset-btn")

let winCount1 = 0
let winCount2 = 0


startbtn.addEventListener('click',function(){
   function getRandonNum(min,max){
     let randomNum1 = Math.floor(Math.random() * (max - min  + 1)) + min;
     let randomNum2 = Math.floor(Math.random() * (max - min  + 1)) + min;
     output1.innerHTML = randomNum1
     output2.innerHTML = randomNum2
     
     showResult(randomNum1,randomNum2)
    }
  
   function showResult(randomNum1,randomNum2){
       if(randomNum1>randomNum2){
        winCount1++
        result.innerHTML = `player1 won!${winCount1} times`
       }         
       else if(randomNum1<randomNum2){
        ++winCount2
        result.innerHTML = `player2 won!${winCount2} times`
       }
       else
       result.innerHTML = "Draw"
  }
  getRandonNum(1,6)
});

resetbtn.addEventListener('click',() =>{
    output1.innerHTML = "-"
    output2.innerHTML = "-"
    result.innerHTML = "Start Game"
    winCount1 = 0
    winCount2 = 0
});