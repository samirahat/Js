const MySelf = {
    name: 'Abdus Sami Rahat',
    age: 16,
    profession: ' Web Developer',
};
const type1 = typeof MySelf;
console.log(type1);
console.log(MySelf);

/// convert object to JSON by stringify
const convertJSON = JSON.stringify(MySelf);
console.log(convertJSON)
const type = typeof convertJSON;
console.log(type);

/// if you want convert JSON to objetct or anything, you need to use = JSON.parse() 
const convertJSONToObject = JSON.parse(convertJSON);
console.log(convertJSONToObject);


///// ARRAY JSON
const friends = ['sami', 'samad', 'sayeed'];
const friendsJSON = JSON.stringify(friends);
console.log(friendsJSON)