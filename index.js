var you = prompt("Would you like to be Player 1 or 2?: ");

function getImageName() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var diceImage = './images/dice' + randomNumber + '.png';

    return [diceImage, randomNumber];
}

if(you == 1 ){
    var self = getImageName();
    document.querySelectorAll("img")[0].setAttribute("src", self[0]);
    var userOneDice = getImageName();
    document.querySelectorAll("img")[1].setAttribute("src", userOneDice[0]);
}else{
    var userOneDice = getImageName();
    document.querySelectorAll("img")[0].setAttribute("src", userOneDice[0]);
    var self = getImageName();
    document.querySelectorAll("img")[1].setAttribute("src", self[0]);
}

if(self[1] > userOneDice[1]){
    document.querySelector("h1").innerHTML = "🚩 you Wins!";
}else if(userOneDice[1] > self[1]){
    document.querySelector("h1").innerHTML = "Opponent Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "🚩 Match Draws! 🚩";
}