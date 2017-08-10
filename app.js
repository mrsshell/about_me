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
