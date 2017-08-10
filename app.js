'use strict';
var yourName = prompt('What is your name?');
alert('Good to meet you ' + yourName);
console.log('Where are you from?');

var dreamJob = prompt('What is your dream job?');
alert('Your dream job sounds amazing!');
console.log('Dream job');

var business = prompt('Have you ever thought about starting a business?').toLowerCase();
if (business === 'yes' || business === 'y') {
  alert('Good for you!');
}
else {
  alert('Keep dreaming, and one day you will do it!');
}
console.log('jobs');

var art = prompt('Do you enjoy fingerpainting?').toLowerCase();
if (art === 'yes' || art === 'y') {
  alert('Go ahead, let\'s make a mess!');
}
else {
  alert('Go wash your hands anyway!');
}
console.log('Messy art');

var run = prompt('Do you run?').toLowerCase();
if (run === 'yes' || run === 'y') {
  alert('YAAY! GO FOR IT!!!');
}
else {
  alert('Take a hike why don\'t you.');
}
console.log('Running');

var backpack = prompt('Do you like to backpack?').toLowerCase();
if (backpack === 'yes' || backpack === 'y') {
  alert('I bet you\'re a Grearhead too!');
}
else {
  alert('You must be a Trenderfoot.');
}
console.log('backpacking');

var twins = prompt('Are my twins identical?').toLowerCase();
if (twins === 'yes' || twins === 'y') {
  alert('My twins are NOT identical.');
}
else {
  alert('You are CORRECT, they are boy and girl faternal twins.');
}

var favColor = ['blue', 'green', 'purple', 'pink', 'orange'];
var guessColor = prompt('What are my two favorite colors?');
if (guessColor === favColor[0]) {
  alert('Yes, one of my favorite colors is blue.');
  if(guessColor === 'blue') {
    prompt('Good guess, what is my other favorite color?');
  }
}
else if(guessColor === favColor[1]) {
  alert('I absolutely love green!');
  if(guessColor === 'green') {
    prompt('Can you guess my other favorite color?');
  }
}
else if(guessColor === favColor[2]){
  alert('Are you kidding????');
  if(guessColor === 'purple') {
    prompt('I\'m sure, try again');
  }
}
else if (guessColor === favColor[3]) {
  alert('Guess again!');
  if(guessColor === 'pink') {
    prompt('Go ahead guess.');
  }
}

else if(guessColor === favColor[4]) {
  alert('yea, not quite...');
  if( guessColor === 'orange') {
    pompt('Ugg! guess again.');
  }
}
else {
  alert('You are not guessing from this list.');
}
console.log('Guessing favorite color game');
var primeNum = [3,17,23,27,31,43];
var myNum = primeNum;
