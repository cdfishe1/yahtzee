//Default value of dice at beginning of game

const diceOnLoad = () => {
  
  die1.innerHTML = 1;
  die2.innerHTML = 2;
  die3.innerHTML = 3;
  die4.innerHTML = 4;
  die5.innerHTML = 5;
};

//Default value of rollCount at beginning of turn
let rollCount = 1;

//The array of dice used in scoring
const scoringArray = [die1, die2, die3, die4, die5];


//Function for making a random roll from 1 to 6
const randRoll = () => Math.floor(Math.random() * 6 ) + 1;

//Function to increase the rollCount by 1 when clicking the roll button
const rollCounterIncrease = () => {
  document.getElementById("rollCountDisplay").innerHTML = rollCount++;
};

const rollDice = () => {
  let die1 = document.getElementById("die1");
  let die2 = document.getElementById("die2");
  let die3 = document.getElementById("die3");
  let die4 = document.getElementById("die4");
  let die5 = document.getElementById("die5");

  let d1 = randRoll();
  let d2 = randRoll();
  let d3 = randRoll();
  let d4 = randRoll();
  let d5 = randRoll();

  die1.innerHTML = d1;
  die2.innerHTML = d2;
  die3.innerHTML = d3;
  die4.innerHTML = d4;
  die5.innerHTML = d5;
  
};

//Function to roll the set of dice
document.getElementById('roll').addEventListener("click", function() {
  rollDice();
  rollCounterIncrease();
});

document.getElementById('die1').addEventListener("click", function() {
  if (die1.style.backgroundColor = "white") {
    document.getElementById('die1').style.backgroundColor = "darkgreen";
    document.getElementById('die1').style.color = "white";
    document.getElementById('die1').style.borderColor = "darkred";
  } else if (die1.style.backgroundColor = "darkgreen") {
    document.getElementById('die1').style.backgroundColor = "white";
  }
});
























