'use strict'; // Always have at beginning of JS files!

/*
// Lecture: Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive.`);

// const interface = `audio`;
// const private = 5;
// const if = 23;

// Lecture: Functions

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`);
console.log(num);

// Lecture: Function Declarations vs. Expressions

// Function declaration
const age1 = calcAge1(1995, 2020)

function calcAge1(birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

// Function expression
const calcAge2 = function (birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}

const age2 = calcAge2(1995, 2020);

console.log(age1, age2);

// Lecture: Arrow Functions

// Arrow function
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1995, `Justice`));
console.log(yearsUntilRetirement(1979, `Patrick`));

// Lecture: Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/