
// javascript for dice game

let randomNumber1 = Math.floor(Math.random() * 6) + 1 // 1 - 6

let randomDiceImgage = './images/dice' + randomNumber1 + ".png" //dice1.png - dice6.png

let imageLeft = document.querySelectorAll('img')[0] //get the first image

let imageLeftDice = imageLeft.setAttribute("src", randomDiceImgage)


// for second dice

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//concat

let randomConcat = './images/dice' + randomNumber2 + ".png" 

//change attribute

let imageRight = document.querySelectorAll("img")[1].setAttribute("src", randomConcat)


if(randomNumber1 > randomNumber2){
    document.getElementById('dice').innerHTML = "PLAYER ONE WINS🚩"
} else if(randomNumber2 > randomNumber1){
    document.getElementById('dice').innerHTML = "PLAYER TWO WINS🚩"
}else {
    document.getElementById('dice').innerHTML = "Draw🤪"
}
