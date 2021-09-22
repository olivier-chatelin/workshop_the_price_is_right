const playerName = prompt("Player's  name?")
const rand = Math.floor(Math.random() *100 +1);
let hasPlayerWon = false;
while(!hasPlayerWon) {
    let playerNumber = prompt('What\'s your number?');
    if (rand < playerNumber) {
        console.log('It is less');
    }
    else if(rand > playerNumber) {
        console.log('It is more');
    } else {
        console.log(`Yes!!! The price was ${rand}, ${playerName} wins`);
        hasPlayerWon = true;
    }
}
console.log('Game Over');