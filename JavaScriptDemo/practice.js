// *********** CLOSURE *********** //
/*
    An inner function always has access to the variables and params of its outer function
    even though the outer function has returned.
*/
function outerFunction(param) {
    let num = 3;
    return function () {
        console.log('CLOSURE -->');
        console.log(`${param} + ${num} = ${param + num}`);
        console.log(`Inner function accessing outer param: ${param} and outer variable:${num}`);
    }
}
// let res = outerFunction(5);
// res();
// --- OR ---
outerFunction(5)();


// *********** OBJECT DESTRUCTURING *********** //
let myObj = {
    FirstName: 'Dibendu',
    LastName: 'Saha'
}

let { FirstName, LastName } = myObj; // <-- variable name MUST match the original property value
console.log('OBJECT DESTRUCTURING -->');
console.log(FirstName, LastName);


// *********** OBJECT CREATION (using function constructor) *********** //
var Person = function (fname, lname, age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
}

var dibendu = new Person('Dibendu', 'Saha', 31);
console.log('Object creation with function constructor');
console.log(dibendu);


// *********** Program to reverse a string *********** //
let str = 'Hello';
let newString = str.split('').reverse().join('');
console.log(str);
console.log(newString);


// *********** 'this': arrow v/s normal function *********** //
function thisNormalFunction() {
    console.log('\'this\' in normal fn', this);
}
thisArrowFunction = () => {
    console.log('\'this\' in normal fn', this);
}
thisNormalFunction();
thisArrowFunction();


