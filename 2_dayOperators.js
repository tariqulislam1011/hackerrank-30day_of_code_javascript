'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function solve(meal_cost, tip_percent, tax_percent) {

    let total_cost;
    total_cost =  meal_cost + meal_cost * tip_percent/100 + meal_cost * tax_percent/100;
    console.log(Math.round(total_cost));
}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

   return solve(meal_cost, tip_percent, tax_percent);
}
