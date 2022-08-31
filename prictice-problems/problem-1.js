/// Problem-1.1::Start ///////

//Write an Arrow function that will take 3 parameters, will multiply the parameter and will return the result::::

const numbers = (first, secound, third) => first * secound * third;
const result = numbers(10, 20, 30);
console.log(result);;;

//another way
const number = (first, secound, third) => {
    const multiply = first * secound * third;
    return multiply;
}
const result1 = number(10, 20, 30);
console.log(result1);
/// Problem-1.1::End ///////


/// Problem-1.2::Start ///////

const myFavourite = `
I am a Web Developer.
I love to Code.
`
console.log(myFavourite);
/// Problem-1.2::End ///////



/// Problem-1.3::Start ///////

const fullName = (first, last = 'Sami Rahat') => {
    return first + ' ' + last
}
const Name = fullName('Abdus');
console.log(Name)

/// Problem-1.3::End ///////