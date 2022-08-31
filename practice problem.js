const oddNumbers = [1, 3, 5, 7, 9];
const convertEvenNumbers = oddNumbers.map(x => x + 1);
console.log(convertEvenNumbers);



///// filter
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = numbers.filter(x => x % 10);
console.log(divisibleBy10);

///find 
const nums = [33, 50, 79, 78, 90, 101, 30];
const anotherDivisibleBy10 = nums.find(x => x % 10);
console.log(anotherDivisibleBy10);



///reduce
const reduceNumbers = [1, 9, 17, 22];
const total = reduceNumbers.reduce((previous, current) => previous + current, 0);
console.log('Reduce: ', total);


const me = {
    name: 'Abdus Sami Rahat',
    age: 16,
}
console.log(me.age);