// let randomNumber1 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);
// let mainText = document.querySelector('h1').innerHTML;

let player1 = prompt('What is the name of the first player?');
let player2 = prompt('What is the name of the second player?');

document.querySelector('.player1').innerHTML = player1;
document.querySelector('.player2').innerHTML = player2;

function secondTry() {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1); //random number 1
    let randomNumber2 = Math.floor(Math.random() * 6 + 1); //random number 2

    document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png'); //Set dice 1
    document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png'); //Set dice 2

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = player1 + ' wins!'; //First player wins
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = player2 + ' wins!'; //Second player wins
    } else if(randomNumber1 === randomNumber2) {
        document.querySelector('h1').innerHTML = 'Draw'; // Draw
    }
}

document.querySelector('.btn').addEventListener("click", secondTry);










