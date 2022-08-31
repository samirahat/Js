const fullName = (first, last) => first + ' ' + last;
const multiply = (num1, num2) => num1 * num2;
//////////// more parameter
const more = (a, b, c, d) => a + b + c + d;

//////////no parameter Arrow Function
const Nothing = () => 3.1416;

/////////One parameter Arrow function
const One = (num) => num * 2;
//////////One parameter Arrow function simple version
const OneSimple = num => num * 2;



///////////multi line  Arrow function
////// if you want to display anything from milti line arrow function , you need to use return statement;;; 
const doMath = (x, y, z) => {
    const addAll = x + y + z;
    const multiplication = addAll * 5;
    const invers = multiplication / 2;
    return invers;
}
const result = doMath(10, 20, 30);
console.log(result);