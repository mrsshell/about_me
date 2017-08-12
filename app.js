'use strict';

var yourName = prompt('Hi there, What is your name?');
alert('Good to meet you ' + yourName + 'let\'s play a guessing game and you can learn all about me!');
console.log('the user will imput a name to play a game');

alert('We can keep score of all your\'re correct answers, and you\'re wrong answers too.');
console.log('the user now knows that al correct answers will be counted.');

var correctYay = 0;
var youSoWrong = 0;

function question1 () {
  var dreamJob = prompt('Do you think my dream job is building web pages?').toLowerCase();
  console.log('Q1:what is my dream job?');
  console.log('A:' + dreamJob);
  if (dreamJob === 'yes' ||  dreamJob === 'y') {
    alert('You are correct!');
    correctYay++;
 } else {
    alert('Sorry, you\'re so Wrong.');
    youSoWrong++;
  }
}
question1();

function question2 () {
  var business = prompt('Have I ever owned a business?').toLowerCase();
  console.log('Q2: Have I ever owned a business?');
  console.log('A:' + business);
  if (business === 'yes' || business === 'y') {
    alert('Yes, I owned a hair salon!, you are right.');
    correctYay++;
  } else {
    alert('Give me some credit for being ambitiuos. Wrong!');
    youSoWrong++;
  }
}
question2();

function question3 () {
  var art = prompt('Do I like to fingerpaint?').toLowerCase();
  console.log('Q3: Do I like to fingerpaint?');
  console.log('A:' + art);
  if (art === 'no' || art === 'n') {
    alert('It\'s a bit too messy for me, so you are right!');
    correctYay++;
  }  else {
    alert('Too squishy and gushy for me! Wrong!');
    youSoWrong++;
  }
}
question3();

function question4 () {
  var run = prompt('Do I like to run?').toLowerCase();
  console.log('Q4: Do I like to run?');
  console.log('A:' + run);
  if (run === 'yes' || run === 'y') {
    alert('OF COURSE I DO !!!');
    correctYay++;
  } else {
    alert('Running keeps me from getting too stressed out. Sorry, you are wrong.');
    youSoWrong++;
  }
}
question4();

function question5() {
  var backpack = prompt('Do I like to backpack?').toLowerCase();
  console.log('Q5: Do I like to backpack?');
  console.log('A' + backpack);
  if (backpack === 'yes' || backpack === 'y') {
    alert('You probably think I\'m a Grearhead too! I do like to backpack.');
    correctYay++;
  }
  else {
    alert('You must think I\'m a Trenderfoot. Sorry.');
    youSoWrong++;
  }
}
question5();

function question6() {
  var twins = prompt('Are my twins identical?').toLowerCase();
  console.log('Q6: Are my twins identical?');
  console.log('A:' + twins);
  if (twins === 'yes' || twins === 'y') {
    alert('My twins are NOT identical.');
    youSoWrong++;
  } else {
    alert('You are CORRECT, they are boy and girl faternal twins.');
    correctYay++;
  }
}
question6();

var totalCorrect = correctYay;
var wrongAnswer = youSoWrong;
  console.log('Total right and wrong answers.')
  alert('Your total right answer is ' + totalCorrect + '.');
  alert('You had ' + wrongAnswer + 'wrong answers');


var favColor = ['blue', 'green', 'purple', 'pink', 'orange','black'];

function question7() {
  var totalChances = 0;
  while(totalChances < 6);
  var guessColor = prompt('What is favorite color? You have six chances.').toLowerCase();
  console.log('What is my favorite color?');
  console.log('A:' + guessColor);

  if (guessColor.includes(favColor[0])) {
    alert('Yes, my favorite colors is ' + favColor);
    totalChances++
    break;
  }
  else {
    alert('Nope! Try again.');
    totalChances++;
    }
  }
}
question7();

var totalGuesses = totalChances;
console.log('Tally of guesses.')
alert('Made a total of ' + totalGuesses + 'guesses.');


var counter = 0;

for (var i = 0; i < 4; i++) {
  var guessIt = prompt('Can you guess my favorite number between 10 and 30?');
  counter ++;
  console.log(parseInt(guessIt));
  if (parseInt(guessIt) === 27) {
    alert('You have guessed my favorite number!');
    break;
  }
  else if(parseInt(guessIt) <= 10 ){
    alert('You have guessed too low.');
  else if(parseInt(guessIt) < 10 && parseInt(guessIt) < 26){
    alert('You are geting close');
  }
  else if (parseInt(guessIt) > 27) {
    alert('You have guessed too high');
  }
}
alert(yourName + 'you have made ' + counter + ' guesses');
console.log('This is the number game');
