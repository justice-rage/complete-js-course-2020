/*
// Lecture: Values and Variables

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = "Matilda";


console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matlida = "JM";
let $function = 27;

let person = 'jonas'
let PI = 3.1415;
*/

/*
// Lecture: Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// Lecture: let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Douglas'
console.log(lastName);

// Lecture: Basic Operators

// Math Opertors
const now = 2037;
const ageJustice = now - 1995;
const ageSarah = now - 2018;
console.log(ageJustice, ageSarah);

console.log(ageJustice * 2, ageJustice / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Justice';
const lastName = 'Douglas';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJustice > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Lecture: Operator Precedence

const now = 2037;
const ageJustice = now - 1995;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJustice + ageSarah) / 2;
console.log(averageAge);
console.log(ageJustice, ageSarah, averageAge);

// Coding Challenge #1

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Lecture: Strings and Template Literals

const firstName = 'Justice';
const job = 'software engineer';
const birthYear = 1995;
const year = 2037;
const age = year - birthYear;

const justice = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(justice);

const justiceNew = `I'm ${firstName}, a ${age} years old ${job}!`;
console.log(justiceNew);

console.log(`Just a normal string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can't start driving license until ${yearsLeft} years from now 😢`)
}

const birthYear = 1995;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)

// Coding Challenge #2

// Coding Challenge #1 - Reused Code
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
//

if (markBMI > johnBMI) {
    console.log(`John's BMI (${johnBMI}) is lower than Mark's BMI (${markBMI})!`)
} else {
    console.log(`Mark's BMI (${markBMI}) is lower than John's BMI (${johnBMI})!`)
}

// Lecture: Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Justice'));
console.log(typeof NaN);

console.log(String(25), 25);

// type coercion
console.log(`I am ` + 25 + ` years old.`)
console.log(`23` - `10` - 3);
console.log(`23` / `2`)
console.log(`23` > `18`)

let n = `1` + 1; // `11`
n = n - 1;
console.log(n);

// Lecture: Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all.`)
} else {
    console.log(`You should get a job!`)
}

let height = 0;
if (height) {
    console.log(`Height is defined.`)
} else {
    console.log(`Height is undefined.`)
}

// Lecture: Equality Operators: == vs. ===

const age = `18`;
if (age === 18) console.log(`You just became an adult. (strict)`);

if (age == 18) console.log(`You just became an adult. (loose)`);

const favorite = Number(prompt(`What's your favorite number?`));

console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
    console.log(`Cool! 23 is an amazing number!`)
} else if (favorite === 7) {
    console.log(`7 is also a cool number!`)
} else if (favorite === 9) {
    console.log(`9 is a cool number.`)
} else {
    console.log(`Number is not 23, 7 or 9.`)
} if (favorite !== 23) console.log(`Why not 23?`);

// Lecture: Boolean Logic

// No code written during this lecture.

// Lecture: Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive.`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive.`);
}

// Coding Challenge #3

// Test Data
// const dolphinsScoreGame1 = 96;
// const dolphinsScoreGame2 = 108;
// const dolphinsScoreGame3 = 89;
// const koalasScoreGame1 = 88;
// const koalasScoreGame2 = 91;
// const koalasScoreGame3 = 110;

// Test Data Bonus 1
// const dolphinsScoreGame1 = 97;
// const dolphinsScoreGame2 = 112;
// const dolphinsScoreGame3 = 101;
// const koalasScoreGame1 = 109;
// const koalasScoreGame2 = 95;
// const koalasScoreGame3 = 123;

// Test Data 2
const dolphinsScoreGame1 = 97;
const dolphinsScoreGame2 = 112;
const dolphinsScoreGame3 = 101;
const koalasScoreGame1 = 109;
const koalasScoreGame2 = 95;
const koalasScoreGame3 = 106;

// Teams' Average Scores
const dolphinsAverageScore = (dolphinsScoreGame1 + dolphinsScoreGame2 + dolphinsScoreGame3) / 3;
const koalasAverageScore = (koalasScoreGame1 + koalasScoreGame2 + koalasScoreGame3) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if ((dolphinsAverageScore && koalasAverageScore) < 100) {
    console.log(`No winners declared. Both teams didn't score the necessary points.`);
} else if ((dolphinsAverageScore >= 100) && (dolphinsAverageScore > koalasAverageScore)) {
    console.log(`The Dolphins are the winners!`);
} else if ((koalasAverageScore >= 100) && (koalasAverageScore > dolphinsAverageScore)) {
    console.log(`The Koalas are the winners!`);
} else if (koalasAverageScore === dolphinsAverageScore) {
    console.log(`It's a draw!`)
}

// Lecture: The Switch statement

const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Not a valid day.`);
// }

if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding bootcamp`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if ((day === 'wednesday') || (day === 'thursday')) {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if ((day === 'saturday') || (day === 'sunday')) {
    console.log(`Enjoy the weekend!`);
} else {
    console.log(`Not a valid day.`);
}

// Lecture: Statements and Expressions

3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = `23 is bigger`;
}
const me = `Justice`;
console.log(`I'm ${2037 - 1991} years old ${me}`)

// Lecture: The Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log(`I like to drink wine 🍷`) :
// console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`;
} else {
    drink2 = `water 💧`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`)

// Coding Challenge #4

const bill = 430;

const tip = (bill >= 50) && (bill <= 300) ? bill * .15 : bill * .2;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${bill + tip}.`);
*/