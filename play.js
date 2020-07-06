var name = 'max';
var age = 5;

console.log(name);

const x = (userName, userAge) => {
    return (userName + 'is ' + userAge + ' years old');
}

const add = (a, b) => a + b; 

// console.log(summarizeUser(name, age));
console.log(x(name, age));


// objects

// no1 
const person = {
    name: 'max',
    age: 5,
    greet(){
        console.log('Hi I am ' + name);
    },

    greet: () => console.log(('Hi I am ' + name)), //Hi i am undefined

    greet: function() {console.log(('Hi I am ' + name))}, //Hi i am max

};

person.greet();

// arrays

// mix of datatypes in same array
const hobbies = ['cooking', true];

// for of loop
for (let hobby of hobbies) {
    console.log(hobby);
}

// map

const my_hobbies = hobbies.map(hobby => 'Hobby : ' + hobby);
console.log(my_hobbies);

// spread operator (...) takes each element of array / object

const copiedHobbies = [...hobbies];
console.log(copiedHobbies)

const copiedPerson = {...person}


// rest operator (...) merge each element pased as args and merge it to array or object

const rest_operator = (...args) => {
    return args;
}

console.log(rest_operator(1,2,2))

// object/array destructuring - if we want to work with particular object fields only or few elements of array only we can make use of this.

// object
const person_name = ({ name }) => {
    console.log(name);
}

person_name(person);

// array
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);