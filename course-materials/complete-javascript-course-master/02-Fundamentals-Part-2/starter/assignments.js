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
*/