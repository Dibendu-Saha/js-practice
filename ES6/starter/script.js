/*** let and const ***/

/** ES 5 **/
for (var i = 0; i < 5; i++) {
    //console.log(i);
}
//console.log(i); // i is accessible

/** ES 6 **/
for (let j = 0; j < 5; j++) {
    //console.log(j);
}
//console.log(j); // j is NOT accessible

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Blocks and IIFE's ***/

/** ES 5 **/
(function () {
    let c = 50;
})();
//console.log(c);


/** ES 6 **/
{
    const a = 10;
    let b = 20;
}

//console.log(a + b);

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Strings in ES6 ***/

/** ES 5 **/
function calcAge(name, birthYear) {
    var age, str;
    age = 2020 - birthYear;
    str = name + ' was born in ' + birthYear + '. He is now ' + age + ' years old.';

    return str;
}
//console.log(calcAge('Dibendu', 1990));

/** ES 6 **/
function calculateAge(name, birthYear) {
    var age, str;
    age = 2020 - birthYear;
    str = `${name} was born in ${birthYear}. He is now ${age} years old.`;

    return str;
}
//console.log(calculateAge('Dibendu', 1990));

// New String methods
var str = 'Michael';
// console.log(str.startsWith('M')); // true or false; case-sensitive
// console.log(str.endsWith('l')); // true or false; case-sensitive
// console.log(str.includes('a')); // true or false; case-sensitive

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Arrow Functions ***/
/** ES 5 **/
const years = [1974, 1990, 1987, 1923, 1909];

var years5 = years.map(function (cur) {
    return 2020 - cur;
});
//console.log(years5);


/** ES 6 **/
// With 1 argument
let years6 = years.map(cur => 2020 - cur);
console.log(years6);

// With 2 arguments
let years66 = years.map((cur, index) => `Element at position ${index} is ${cur}.`);
console.log(years66);

// With 2 arguments AND more than 1 line of code in the function
let years662 = years.map((cur, index) => {
    const str = 'Hello';
    return `${str}, Welcome to ${cur}.`;
});
console.log(years662);

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Arrow Functions: Lexical 'this' keyword ***/
/* 


                    TO DO



*/

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Destructuring ***/
/* 


                    TO DO



*/

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Arrays in ES 6 ***/

var boxes = document.querySelectorAll('.box');

/* ES 5 */
var box5 = Array.prototype.slice.call(boxes);
box5.forEach(function (cur) {
    //cur.style.backgroundColor = 'orange';
});

/* ES 6 */
let box6 = Array.from(boxes);
//box6.forEach(cur => cur.style.backgroundColor = 'green');

/* ES 6 - for-of loop */
for (let cur of box6) {
    if (cur.className == 'box blue') {
        continue;
        // break;
    }

    // cur.style.backgroundColor = 'pink';
    // cur.textContent = `I'm  changed to pink!`;
}


/* findIndex() */


//   -------- TO DO -------


/* find() */

//   -------- TO DO -------






/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Spread operator ***/
var sum, arr;

function add(a, b, c, d) {
    return a + b + c + d;
}

/* ES 5 */
sum = add(1, 2, 3, 4);
console.log(sum);

/* ES 6 */
arr = [1, 2, 3, 4];
sum = add(...arr);  // <-- Spread operator ...
console.log(sum);

/* ES 6 - Another example */
var johnFamily = ['John', 'Bruce', 'Lee'];
var smithFamily = ['Smith', 'Lina', 'Jane'];

var bigFamily = [...johnFamily, 'Andrew', ...smithFamily]  // <-- Spread operator ...
console.log(bigFamily);


/* ES 6 - And one more... */
var h1 = document.querySelector('h1');
var boxes = document.querySelectorAll('.box');

var allElements = [h1, ...boxes];  // <-- Spread operator ...

allElements.forEach(cur => {
    cur.style.backgroundColor = 'red';
});








