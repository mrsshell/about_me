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

var favColor = ['blue', 'green', 'pruple', 'pink', 'orange'];
var guessColor = prompt('What are my two favorite colors?');
if (guessColor === favColor[0]) {
  alert('Yes, one of my favorite colors is blue.');
}
else if(guessColor === favColor[1]) {
  alert('I absolutely love green!');
}
else if(GuessColor === favColor[2]){
  alert('Are you kidding????');
}
else if (guessColor === favColor[3]) {
  alert('Guess again!');
}
else if(guessColor === favColor[4]) {
  alert('yea, not quite...');
}
else {
  alert('You are not guessing from this list.');
}
