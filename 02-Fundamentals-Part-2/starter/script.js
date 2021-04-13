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



console.log('CLASS 34')
  //  Function Declarations vs. Expressions


  // Function Declaration   - Can call before it is defined
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
  //const age = 2037 - birthYear;
  //return age;
  return 2037 - birthYear;
}


  //  Function Expression   - Can not call before defined
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);


console.log('CLASS 35')
  //  Arrow Functions

  //  Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
 
  //  Arrow Function (special type of function expression)

// 1 paramet, 1 line of code
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// 1 parameter, multiple lines of code
const yearsUntilRetirement1 = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
}
console.log(yearsUntilRetirement1(1991));

// multiple parameters, multiple lines of code
const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1980, 'Bob'));


console.log('CLASS 36')
  //  Functions Calling Other Functions

function cutFruitPieces(fruit) {
  //return fruit * 4
  return fruit * 3
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

console.log('CLASS 37')
  //  Reviewing Functions

const calcAge = function(birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  //return statement exits the if statement
  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
    return retirement;
    //  will not post string 2nd time, it is after return
    console.log(`${firstName} retires in ${retirement} years.`)
  } else {
    return -1;
  }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));
*/

