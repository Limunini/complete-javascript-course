'use strict';
// ^ strictmode enabled. Has to be first line of code.

/*
console.log('CLASS 32')
  //  Activating Strict Mode
let hasDriverLicense = false;
const passTest = true;

//if(passTest) hasDriversLicense = true; //Doesn't give error that variable does not exist if not strict mode

if(passTest) hasDriverLicense = true;  //Now works since right variable
if (hasDriverLicense) console.log('I can drive :D')

//Some variables reserved by JS
//const interface = 'Audio';  //gives error 'interface' is saved for potential future features in JS
//const private = 534;  //also gives error like interface
//const if = true;
*/

console.log('CLASS 33')
  //  Functions

function logger() {
  console.log('My name is Jonas');
}

//  calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
//  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

// Built in Functions
const num = Number('23');