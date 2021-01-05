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

// Lecture: Basic Array Operations (Methods)

const friends = [`Michael`, `Steven`, `Peter`];

// Add elements
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

// Remove elements
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)) {
    console.log(`You have a friend named Steven.`);
}


// Coding Cahllenge #2

// Tip Calculator
// if bill = between 50 and 300 than tip = 15%
// else tip = 20%
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44]; // Test Data

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Lecture: Introduction to Objects

const justice = {
    firstName: `justice`,
    lastName: `douglas`,
    age: 2021 - 1995,
    job: `software engineer`,
    cats: [`velma`, `vulcan`, `vader`]
};

//  Lecture: Dot vs. Bracket Notation

const justice = {
    firstName: `justice`,
    lastName: `douglas`,
    age: 2021 - 1995,
    job: `software engineer`,
    cats: [`velma`, `vulcan`, `vader`],
    numFriends: 3,
    bestfriend: `michael`
};
console.log(justice);

console.log(justice.lastName);
console.log(justice[`lastName`]);

const nameKey = `Name`;
console.log(justice[`first` + nameKey]);
console.log(justice[`last` + nameKey]);

// console.log(justice.`last` + nameKey);

const interestedIn = prompt(`What do you want to know about Justice? Choose between firstName, lastName, age, job, and friends`);

if (justice[interestedIn]) {
    console.log(justice[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`)
}

justice.location = `Pittsburgh`;
justice[`twitter`] = `@mr-justice`;
console.log(justice);

// Challenge
// `Justice has 3 friends, and his best friend is Michael`

console.log(`${justice.firstName} has ${justice.cats.length} cats, and his oldest is ${justice.cats[2]}.`);

// Lecture: Object Methods

const justice = {
    firstName: `justice`,
    lastName: `douglas`,
    birthYear: 1995,
    job: `software engineer`,
    friends: [`marcos`, `sarah`, `tal`],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2020 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2020 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? `a` : `no`} drivers license.`
    }
};

console.log(justice.calcAge());

console.log(justice.age);
console.log(justice.age);
console.log(justice.age);

// Challenge
console.log(`${justice.firstName} is a ${justice.age}-year old ${justice.job}, and he has ${justice.driversLicenseNoA} drivers license.`)

console.log(justice.getSummary());

// Coding Challenge #3

const mark = {
    firstName: `mark`,
    lastName: `miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2)
        return this.bmi;
    }
}

const john = {
    firstName: `john`,
    lastName: `smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2)
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})!`)
} else {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})!`)
}

// Lecture: Iteration: The for Loop

// For loop keeps running while condition is True
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// Lecture: Looping Arrays, Breaking and Continuing

const justice = [
    `justice`,
    `douglas`,
    2020 - 1995,
    `software engineer`,
    [`marcos`, `sarah`, `tal`],
    true
];

const types = [];

for (let i = 0; i < justice.length; i++) {
    // reading from justice array
    console.log(justice[i], typeof justice[i]);

    // Filling types array
    // types[i] = typeof justice[i];
    types.push(typeof justice[i]);
}

console.log(types);

const years = [1995, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`----ONLY STRINGS----`);
for (let i = 0; i < justice.length; i++) {
    if (typeof justice[i] !== `string`) continue;

    console.log(justice[i], typeof justice[i]);
}

console.log(`----BREAK WITH NUMBER----`);
for (let i = 0; i < justice.length; i++) {
    if (typeof justice[i] === `number`) break;

    console.log(justice[i], typeof justice[i]);
}

// Lecture: Looping Backwards and Loops in Loops

const justice = [
    `justice`,
    `douglas`,
    2020 - 1995,
    `software engineer`,
    [`marcos`, `sarah`, `tal`],
    true
];

// Reverse for Loop
// 4, 3, 2, 1, 0
for (let i = justice.length - 1; i >= 0; i--) {
    console.log(i, justice[i]);
}

// Sets
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);
    // Reps
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`)
    }
}

// Lecture: The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

// Coding Challenge #4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/