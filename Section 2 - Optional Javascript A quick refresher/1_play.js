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



///////// Object and Arrays


const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);
console.log(person);

person.greet();


const hobbies = ['sports', 'cooking'];
for(let hobby of hobbies) {
    console.log(hobby);
}

//used to transform the elements in the array.
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
// or
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// console.log(hobbies);


hobbies.push('Programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);
// or
// const copiedArray = [hobbies];
// console.log(copiedArray);


const copiedArray_1 = [hobbies];
console.log(copiedArray_1);


 


// for some arguments
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(1, 2, 3, 4));


// for any number of arguments
const toArray_1 = (...args) => {
    return args;
}

console.log(toArray_1(1, 2, 3, 4));





///////////////// Destructuring

// defined in uper section

// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// };

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

// const { name, age } = person;

// console.log(name, age);


const hobby = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);



