var name = "Max";
var age  =29;
var hasHobbies = true;


age = 30;
// const summarizeUser = function (userName, userAge, userHasHobby) {
// or
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

const add = (a, b) => {
    return a + b;
};

const addOne = (a) => a + 1;


console.log( add(1, 2) );

console.log( addOne(4, 5) );

console.log( summarizeUser(name, age, hasHobbies) );

// console.log(name)



// let name = "Max";
// let age = 29;
