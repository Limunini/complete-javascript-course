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


console.log('CLASS 39')
  //  Introduction to Arrays
  
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

  // Arrays are data structures. 
  //Block brackets (literal syntax) or new Array()

const friends = ['Michael', 'Steven', 'Peter' ];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

  // Arrays are 0 based. Index starts at 0
console.log(friends[0]);  // Micheal
console.log(friends[2]);  // Peter

console.log(friends.length);    // Array property
console.log(friends[friends.length - 1]);    // Can use length to get last index of array

  // Can change arrays
friends[2] = 'Jay';  // friends declared as const, but only primitive values can't be changed. 
//friends = ['Alice', 'Bob'] //  Arrays can be mutated, not replaced entirely
console.log(friends);

  // can put variables, other arrays, etc in an array. JS just expects an expression.
const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);  // can click arrow next to array in browser to open more info and see the friends array and length and stuff.

  // From previous exercise
const calcAge = function(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
//  console.log(calcAge(years))  // Won't work, since it is an array
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), age2, calcAge(years[years.length - 1])]  //  Can also put functions etc in the array as long as it is an expression
console.log(ages);


console.log('CLASS 40')
  //  Array Methods

const friends = ['Michael', 'Steven', 'Peter' ];

  // ADD ELEMENTS
const newLength = friends.push('Jay');  //  Function we call, add element to the end of an array. Returns new length of the array (usually don't use it for length, but rather to jsut add element)
console.log(friends);
console.log(newLength);

friends.unshift('John');  // adds element to the start of array, also returns new length
console.log(friends);

  // REMOVE ELEMENTS
const popped = friends.pop();  // Removes last element, don't need to add argument. Returns the removed element
console.log(friends);
console.log(popped);
friends.pop();
console.log(friends);

friends.shift(); // Removes first element in array, returns element that was removed.
console.log(friends);

  // Can look for element
console.log(friends.indexOf('Steven'))  // returns 1
console.log(friends.indexOf('Bob'))  // returns -1 (element does not exist)

  // Returns True or False if element is in array (strict equality - does not do type coercion).
console.log(friends.includes('Steven'))  // returns true
console.log(friends.includes('Bob'))  // returns false

if (friends.includes('Peter')) {
  console.log('You have a friend named Peter')
} else if (friends.includes('Steven')) {
  console.log('You have a friend named Steven')
}
*/


console.log('CLASS 42')
  //  Intro to Objects