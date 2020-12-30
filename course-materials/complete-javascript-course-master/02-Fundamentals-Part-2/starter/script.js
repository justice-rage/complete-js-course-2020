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

// Lecture: Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, ` Mike`));

// Coding Challenge #1

// 1)

// Arrow function
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(7, 4, 8));

// 2)
let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinsAverage, koalasAverage);

// 3)
const checkWinner = function (dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(`Dolphins win - ${dolphinsAverage} vs. ${koalasAverage}`);
    } else if (koalasAverage >= 2 * dolphinsAverage) {
        console.log(`Koalas win - ${koalasAverage} vs. ${dolphinsAverage}`);
    } else {
        console.log(`No one wins.`);
    }
}

checkWinner(dolphinsAverage, koalasAverage);

checkWinner(576, 111);

// Test Data 2
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);

checkWinner(dolphinsAverage, koalasAverage);

// Lecture: Introduction to Arrays

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`,
    console.log(friends);

const firstName = `Jonas`;
const jonas = [`Jonas`, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);

console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/