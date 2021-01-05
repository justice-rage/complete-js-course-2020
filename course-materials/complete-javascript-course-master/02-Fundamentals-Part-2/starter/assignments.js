/*
// Part 2 - Lecture Assignments

// Lecture: Functions

function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} people and its capital city is ${capitalCity}.`);
}

const usa = describeCountry(`USA`, 375000000, `Washington DC`);
const canada = describeCountry(`Canada`, 45000000, `Ottawa`);
const mexico = describeCountry(`Mexico`, 126000000, `Mexico City`);

// Lecture: Function Declarations vs. Expressions

// Function Declarations
const china = percentageOfWorld1(1441000000);
// const usa = percentageOfWorld1(375000000);
// const canada = percentageOfWorld1(40000000);

function percentageOfWorld1(population) {
    return ((population / 7900000000) * 100);
}

console.log(china);
console.log(usa);
console.log(canada);

// Function Expressions

const percentageOfWorld2 = function (population) {
    return ((population / 7900000000) * 100);
}

const china2 = percentageOfWorld2(1441000000);
const usa2 = percentageOfWorld2(375000000);
const canada2 = percentageOfWorld2(40000000);

console.log(china2);
console.log(usa2);
console.log(canada2);

// Lecture: Arrow Functions

const percentageOfWorld3 = population => ((population / 7900000000) * 100);

// const china = percentageOfWorld3(1441000000);
console.log(china);
// const usa = percentageOfWorld3(375000000);
console.log(usa);
// const canada = percentageOfWorld3(40000000);
console.log(canada);


// Lecture: Functions Calling Other Functions

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} people, which is about ${percentage}% of the world.`;
    console.log(description);
};

describePopulation(`China`, 1441000000);
describePopulation(`USA`, 375000000);
describePopulation(`Canada`, 47000000);

// Lecture: Introduction to Arrays

const populations = [375000000, 1441000000, 47000000, 175000000];
console.log(populations.length);

const dataUSA = percentageOfWorld1(populations[0]);
const dataChina = percentageOfWorld1(populations[1]);
const dataCanada = percentageOfWorld1(populations[2]);
const dataMexico = percentageOfWorld1(populations[3]);

const percentages = [dataUSA, dataChina, dataCanada, dataMexico];
console.log(percentages);

// Lecture: Basic Array Operations (Methods)

const neighbours = [`canada`, `mexico`];
console.log(neighbours);

neighbours.push(`Utopia`);
console.log(neighbours);

neighbours.pop();
console.log(neighbours);



if (!neighbours.includes(`germany`)) {
    console.log(`Probably not a central European country.`);
}

neighbours[neighbours.indexOf(`canada`)] = `brazil`;
console.log(neighbours);

// Lecture: Introduction to Objects

// const myCountry = {
//     country: `australia`,
//     capital: `canberra`,
//     language: `english`,
//     population: 25000000,
//     neighbours: [],

//     describe: function () {
//         return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`
//     }
// }

// Lecture: Dot vs. Bracket Notation

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(`${myCountry.country} has ${myCountry.population + 2000000} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(`${myCountry.country} has ${myCountry[`population`] - 2000000} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// Lecture: Object Methods

const myCountry = {
    country: `australia`,
    capital: `canberra`,
    language: `english`,
    population: 25000000,
    neighbours: [0],

    describe: function () {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsIsland: function () {
        this.isIsland = !Boolean(this.neighbours.length);
    }
}

console.log(myCountry.describe());
console.log(myCountry);

// Lecture: Iteration: The for Loop

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`);
}

// Lecture: Looping Arrays, Breaking and Continuing

const populations2 = [
    375000000,
    1441000000,
    47000000,
    175000000
];

const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
    console.log(percentageOfWorld1(populations2[i]));
}

console.log(percentageOfWorld1(375000000));

// Lecture: Looping Backwards and Loops in Loops

const listOfNeighbours = [
    [`canada`, `mexico`],
    [`spain`],
    [`norway`, `sweden`, `russia`]
];

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// Lecture: The while Loop

const populations3 = [
    375000000,
    1441000000,
    47000000,
    175000000
];

const percentages3 = [];

let i = 0;
while (i < populations3.length) {
    console.log(percentageOfWorld1(populations3[i]));
    i++
}

console.log(percentageOfWorld1(375000000));
*/