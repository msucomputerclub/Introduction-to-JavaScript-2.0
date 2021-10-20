// Note: if you run this it will contain errors just comment the error output out in the file


// 1. start off with hello world

// console is an object, log is a function
console.log("hello world");

// 2. Mathematical Assignment Functions

var x = "hello"
var y = 9;

let r = 10;
const constant = "hi";
r += 1
console.log(r);


// 3. String concatenation

let str = 'dog';
console.log("I have a " + str + ".");


// 4. String Interpolation

console.log(`I own a pet ${str}.`);

// 5. Typeof Operator

const unknown1 = 'foo';
console.log(typeof unknown1);

const unknown2 = 3.12;
console.log(typeof unknown2);

// 6. Conditional Statements

if(true){
  console.log("x")
}
if(5 === "5"){
  console.log(5);
}
else {
  console.log("hi");
}

/*
other Conditional statements
<, > <=, >=, ===, !==
*/

// 7. Functions

function greeting(name){
  console.log("hello " + name);
}
greeting('Mark')

function greeting(name = 'stranger'){
  console.log("hello " + name);
}
greeting()

const plantNeedsWater = function(day){
  if(day === "Wednesday"){
    return true;
  }
  else{
    return false;
  }
}

console.log(plantNeedsWater('Wednesday'));

// 8. Function expressions



// 9. Arrow functions

const plantNeedsWater = day => {
  if(day === "Wednesday"){
    return true;
  }
  else{
    return false;
  }
}
console.log(plantNeedsWater('Wednesday'));
// 10. Concise body arrow functions

const squareNum = (num) => {
  return num*num;
}

const squareNum = num => num*num
squareNum(2)


// 11. Rock Paper Scissors game

const getUserChoice = (userInput) => {
  if(userInput === "rock"){
    return userInput;
  }
  else if(userInput === "paper"){
    return userInput;
  }
  else if(userInput === "scissors"){
    return userInput;
  }
  else{
    console.log("error with input")
  }
  userInput = userInput.toLowerCase();
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0){
    return "rock";
  }
  else if(randomNumber === 1){
    return "paper";
  }
  else if(randomNumber === 2){
    return "scissors";
  }
}


const determineWinner = (userChoice, computerChoice) => {

if(userChoice === computerChoice)
  return "tie!"
// we can have rock win, a paper win, or scissor

if(userChoice === "rock"){
  if(computerChoice === "paper"){
    return "cpu wins"
  }
  else{
    return "you win!"
  }
}

if(userChoice === "paper"){
  if(computerChoice === "scissors"){
    return "cpu wins"
  }
  else{
    return "you win!"
  }
}

if(userChoice === "scissors"){
  if(computerChoice === "rock"){
    return "cpu wins"
  }
  else{
    return "you win!"
  }
}

}

function playGame(){
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

// arrays

let names = ['Mark', 'David', 'Mike']
console.log(names[0]);
console.log(names[names.length]);
names[1] = "Dr.Li"
console.log(names);

const itemTracker = ['item 0', "item 1", "item 2"]
itemTracker.push('item 3', "item 4");
console.log(itemTracker);

itemTracker.pop();
console.log(itemTracker);

// for loops

for(let i = 0; i < 10; i++){
  console.log(i);
}