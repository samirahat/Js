///  MAP   ////

////number (map)
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const double = numbers.map(x => x * 2);
const half = numbers.map(y => y / 2);
console.log(double);
console.log(half);


/////// String (map)

const friends = ['Sami', 'Samad', 'Sayeed'];
const FirndFriend = friends.map(x => x);
const FriendLengths = friends.map(y => y.length);
console.log(FirndFriend);
console.log(FriendLengths);


//// forEach //////



//// filter ////// its gives the all values which will match with the current condition 

const nums = [12, 40, 21, 54, 65, 10, 50, 51, 85, 65, 95, 75, 25, 35, 15];
const big = nums.filter(num => num < 50);
console.log(big);


//// find //// its give only the first value which will match with the current condition::
const num1 = [12, 40, 21, 54, 65, 10, 50, 51, 85, 65, 95, 75, 25, 35, 15];
const find = num1.find(num => num % 5 === 0);
console.log(find)