////////////   Function Declaation   //////////
function Way1(first, secound) {
    const Sum = first + secound;
    return Sum;
}
Way1(10, 20);



//////////Function Expression /////////// 
const Way2 = function Way2(first, secound) {
    return first + secound;
};
Way2(10, 20);



////////////// Arrow Function //////////////////

const Way3 = (first, secound) => first + secound;

const result = Way3(10, 20);
console.log(result)