/* var x, y;
x = 10;
y = 30;

console.log(x, y); */

// *********** Coding Challenge *********** //
/*
var markHeight, markMass, johnHeight, johnMass;
var markBmi, johnBmi;
markHeight = 1.7;
markMass = 70;
johnHeight = 1.8;
johnMass = 72;

markBmi = markMass / (markHeight * markHeight);
johnBmi = johnMass / (johnHeight * johnHeight);

var markHighBmi = markBmi > johnBmi;
console.log("Is Mark's BMI higher than John? " + markHighBmi); 
*/

// *********** Truthy and Falsy values *********** //
var length;
length = 0;
if (length || length === 0)
    console.log('Varable is defined');
else
    console.log('Variable is NOT defined');

// *********** '==' vs '===' *********** //
// == does a type coersion (conversion), === does NOT (does a strict compare, including type)
var x = 12;
var y = 20;
if (x == '12')
    console.log('==');
else
    console.log('===');

if (y === '20')
    console.log('==');
else
    console.log('===');


// *********** Coding Challenge *********** //
/*
var scoreOneJohn, scoreTwoJohn, scoreThreeJohn, avgJohn;
var scoreOneMike, scoreTwoMike, scoreThreeMike, avgMike;

scoreOneJohn = 110;
scoreTwoJohn = 120;
scoreThreeJohn = 103;

scoreOneMike = 116;
scoreTwoMike = 94;
scoreThreeMike = 123;

avgJohn = (scoreOneJohn + scoreTwoJohn + scoreThreeJohn) / 3;
avgMike = (scoreOneMike + scoreTwoMike + scoreThreeMike) / 3;
console.log('John: ' + avgJohn, 'Mike: ' + avgMike);

switch (true) {
    case avgJohn > avgMike:
        console.log('John\'s team is the winner with ' + avgJohn + ' points.');
        break;
    case avgJohn < avgMike:
        console.log('Mike\'s team is the winner with ' + avgMike + ' points.');
        break;
    default:
        console.log('It\'s a draw.');
}
*/

// *********** Function Statements and Expressions *********** //
function calculateSum(x, y) {
    return x + y;
}
var calculateDiff = function (x, y) {
    return x - y;
}
var sum = calculateSum(4, 6);
var diff = calculateDiff(6, 4);
console.log(sum, diff);


// *********** Coding Challenge *********** //
// var calculateTip = function (bill) {
//     switch (true) {
//         case (bill < 50):
//             return 0.2 * bill;
//         case (bill >= 50 && bill <= 200):
//             return 0.15 * bill;
//         default:
//             return 0.1 * bill;
//     }
// }

// console.log("Tip", calculateTip(124), calculateTip(48), calculateTip(268));

// var tips = [calculateTip(124), calculateTip(48), calculateTip(268)];
// var total = [124 + calculateTip(124), 48 + calculateTip(48), 268 + calculateTip(268)];

// console.log(tips);
// console.log(total);

// *********** Objects *********** //
var dibendu = {
    firstName: 'Dibendu',
    lastName: 'Saha',
    birthYear: 1990,
    job: 'Developer',
    calculateAge: function () {
        this.age = 2020 - this.birthYear;
    }
};

console.log(dibendu.firstName, dibendu['lastName']);
dibendu.calculateAge();
console.log(dibendu);


// *********** Coding Challenge *********** //
// var mark = {
//     name: 'Mark Richardson',
//     mass: 70,
//     height: 1.75,
//     calcBmi: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var john = {
//     name: 'John Johnson',
//     mass: 63,
//     height: 1.65,
//     calcBmi: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var markBmi = mark.calcBmi();
// var johnBmi = john.calcBmi();
// var result;
// if (markBmi > johnBmi)
//     result = mark.name + ' has a higher BMI of ' + mark.bmi;
// else if (markBmi < johnBmi)
//     result = john.name + ' has a higher BMI of ' + john.bmi;
// else
//     result = 'Both have the same BMI.';

// console.log(mark, john);
// console.log(result);
// console.log(markBmi > johnBmi ? mark.name + ' has a higher BMI of ' + markBmi : johnBmi.name + ' has a higher BMI of ' + johnBmi);



// *********** CODING CHALLENGE *********** //
// var tips = [];
// var totalBill = [];
// var billObj = {
//     bill: [124, 48, 268, 180, 42],
//     calcTip: function () {
//         var tip;
//         for (var i = 0; i < this.bill.length; i++) {
//             if (this.bill[i] < 50)
//                 tip = 0.2;
//             else if (this.bill[i] >= 50 && this.bill <= 200)
//                 tip = 0.15;
//             else
//                 tip = 0.1;

//             tip = tip * this.bill[i];
//             tips.push(tip);
//             totalBill.push(tip + this.bill[i]);
//         }
//     }
// };
// billObj.calcTip();
// console.log(tips, totalBill);

// var tips = [];
// var totalBill = [];
// var billObj = {
//     bill: [77, 375, 110, 45],
//     calcTip: function () {
//         var tip;
//         for (var i = 0; i < this.bill.length; i++) {
//             if (this.bill[i] < 100)
//                 tip = 0.2;
//             else if (this.bill[i] >= 100 && this.bill <= 300)
//                 tip = 0.1;
//             else
//                 tip = 0.25;

//             tip = tip * this.bill[i];
//             tips.push(tip);
//             totalBill.push(tip + this.bill[i]);
//         }
//     }
// };
// billObj.calcTip();
// console.log(tips);

// var sum = 0, avg = 0;
// function calcAvg() {
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     avg = sum / tips.length;
//     console.log(avg);
// }

// calcAvg();


// *********** 'this' variable/keyword *********** //
console.log('*********** \'this\' variable/keyword ***********');
console.log(this);

function demoFunc() {
    console.log('Inside function: ', this);
}
demoFunc();

var dibendu = {
    firstName: 'Dibendu',
    lastName: 'Saha',
    calculateSomething: function () {
        console.log(this);
        function innerFunc() {
            console.log(this);
        }
        innerFunc();
    }
};
dibendu.calculateSomething();


// *********** Prototype and Inheritance *********** //
// Function constructor
var Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.calculateAge = function () {
        console.log(`My  name is ${name} and I'm ${age} years old`);
    }
}

Person.prototype.calculateMyRetirement = function () {
    console.log("Testing retirement function");
}

var deb = new Person('Dibendu', 30);
console.log(deb);
console.log(deb.calculateAge());
console.log(deb.calculateMyRetirement());


// *********** fetch API *********** //
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.metaweather.com/api/location/2487956')}`)
    .then(result => {
        console.log(result);
        return result.json()
    })
    .then(data => console.log(data))


// *********** fetch API (with async/await) *********** //
// const apiData = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.metaweather.com/api/location/2487956')}`);


// *********** call() *********** //
function doSomething() {
    console.log('Hello ' + this.name);
}

var obj = { name: "Dibendu" };

doSomething();
doSomething.call(obj);

// var john = {
//     name: 'John',
//     age: '30',
//     greet: function (name, age) {
//         console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// var max = {
//     name: 'Max',
//     age: '31'
// }

// john.greet.apply(max, 'Maxy', 31)






























