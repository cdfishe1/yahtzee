let rollCount = 0;
let currentRolls = [];
let holdRolls = [];
let scoringRolls = [];
const randRoll = () => Math.floor(Math.random() * 6 ) + 1;

const firstRoll = () => {
    for (let i = 1; i <= 5; i++) {
        currentRolls.push(randRoll());
    }
}

firstRoll();
console.log(currentRolls);

