'use strict';
var yourName = prompt('Hi there, What is your name?');
alert('Good to meet you ' + yourName + 'let\'s play a guessing game and you can learn all about me!');
console.log('the user will imput a name to play a game');

alert('We can keep score of all your\'re correct answers.');
console.log('the user now knows that all correct answers will be counted.');

var yourCorrectScore = correct;
var yourWrong = wrong;

var dreamJob = prompt('Do you think my dream job is building web pages?');
if (dreamJob.toLowerCase() === 'yes' ||  dreamJob.toLowerCase() 'y'); {
alert('You are correct!');
  correct++;
}
console.log('This is the correct answer for job.');
else {
  alert('Sorry, I really want to build web pages. Wrong.');
  wrong++;
}
console.log('This counts as wrong.');

var business = prompt('Have I ever owned a business?');
if (business.toLowerCase() === 'yes' || business.toLowerCase() === 'y') {
  alert('Yes, I owned a hair salon!, you are right.');
  correct++;
}
console.log('this is the correct answer for business.');
else {
  alert('Give me some credit for being ambitiuos. Wrong!');
  wrong++;
}
console.log('wrong answer for business.');

var art = prompt('Do I like to fingerpaint?');
if (art.toLowerCase() === 'no' || art.toLowerCase() === 'n') {
  alert('It\'s a bit too messy for me, so you are right!');
  correct++;
}
console.log('This is the correct answer for art.');
else {
  alert('Too squishy and gushy for me! Wrong!');
  wrong++;
}
console.log('Not my type of art. Wrong!');

var run = prompt('Do I like to run?');
if (run.toLowerCase() === 'yes' || run.toLowerCase() === 'y') {
  alert('OF COURSE I DO !!!');
  correct++;
}
console.log('This will count as correct for run.');
else {
  alert('Running keeps me from getting too stressed out. Sorry, you are wrong.');
  wrong++;
}
console.log('Running');

var backpack = prompt('Do I like to backpack?');
if (backpack.toLowerCase() === 'yes' || backpack.toLowerCase() === 'y') {
  alert('You probably think I\'m a Grearhead too! I do like to backpack.');
  correct++;
console.log('This is the correct answer for backpack.')
}
else {
  alert('You must think I\'m a Trenderfoot. Sorry.');
  wrong++;
}
console.log('wrong answer for backpacking.');

var twins = prompt('Are my twins identical?').toLowerCase();
if (twins === 'yes' || twins === 'y') {
  alert('My twins are NOT identical.');
}
else {
  alert('You are CORRECT, they are boy and girl faternal twins.');
}

var favColor = ['blue', 'green', 'purple', 'pink', 'orange'];
var guessColor = prompt('What is favorite color?');

if (guessColor === favColor[0]) {
  alert('Yes, one of my favorite colors is blue, but not quite.');
}
else if(guessColor === favColor[1]) {
  alert('I absolutely love green!');
}
else if(guessColor === favColor[2]) {
  alert('Are you kidding?');
}
else if (guessColor === favColor[3]) {
  alert('Not really!');
}
else if(guessColor === favColor[4]) {
  alert('yea, not quite...');
}
else {
  alert('You are not guessing from this list.');
}
console.log('Guessing favorite color game');

var counter = 0;

for (var i = 0; i < 4; i++) {
  var guessIt = prompt('Can you guess my favorite number?');
  counter ++;
  console.log(parseInt(guessIt));
  if (parseInt(guessIt) === 27) {
    alert('You have guessed my favorite number!');
    break;
  }
  else if(parseInt(guessIt) < 10 ){
    alert('You have guessed too low.');
  }
  else if(parseInt(guessIt) < 10 && parseInt(guessIt) < 26){
    alert('You are geting close');
  }
  else if (parseInt(guessIt) > 27) {
    alert('You have guessed too high');
  }
}
alert('You have made ' + counter + ' guess');
console.log('This is the number game');
