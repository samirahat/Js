// const max = Math.max(12, 52, 41, 32, 12, 45, 20, 21, 10, 500);
// console.log(max);
// /////if you want to get the values from an Array, you need to use before variable name ... (3 dots); 
// const arrayMax = [12, 52, 41, 32, 12, 45, 20, 21, 10, 500];
// console.log(...arrayMax);

// const Max2 = Math.max(...arrayMax);
// console.log(Max2);

// const names = ['sami', 'samad', 'tania'];
// console.log(...names, 'hannan', 'rehana');



//// Array into Array

const numbers = [12, 52, 41, 32, 12, 45, 20, 21, 10, 500];
const number1 = [...numbers];
numbers.push(25);
number1.push(700);
console.log(numbers);
console.log(number1);