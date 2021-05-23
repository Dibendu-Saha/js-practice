//***************** IMPORTANT *****************//

/*** Prototype and Inheritance ***/
var Person = function (firstName, birthYear, job) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.job = job;
}

// Adding 'calculateAge' to prototype, so that it is available for inheritance.
Person.prototype.calculateAge = function () {
    // console.log(2020 - this.birthYear);
}

Person.prototype.lastName = 'LeBlanc';

var john = new Person('John', 1990, 'teacher');
var mark = new Person('Mark', 1984, 'developer');
var jennie = new Person('Jennie', 1992, 'designer');
john.calculateAge();
mark.calculateAge();
jennie.calculateAge();

// console.log(john.lastName);
// console.log(mark.lastName);
// console.log(jennie.lastName);

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Passing function as a parameter (call-back functions) ***/
var birthYears = [1990, 1995, 2006, 1983, 1976];

// Passing birthYears (array, years) and calcAge (function, fn) as parameters
function arrayCalc(years, fn) {
    var arrRes = [];
    for (var i = 0; i < years.length; i++) {
        arrRes.push(fn(years[i]));
    }
    return arrRes;
}

// Example 1
function calcAge(year) {
    return 2020 - year;
}

// Example 2
function isFullAge(year) {
    return year >= 18;
}

var ages = arrayCalc(birthYears, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
// console.log(ages);
// console.log(fullAges);

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Returning function from a function ***/
function interviewQuestions(job) {
    if (job === 'developer') {
        // 2. The function RETURNS A FUCTION (anonymous function).
        return function (name) {
            // console.log('Hi ' + name + ', what language do you work on?');
        }
    }
}

/* 
   1. interviewQuestions() is invoked.
   3. Returned function is assigned to variable 'devQuestion'.
*/
var devQuestion = interviewQuestions('developer');

/*
   4. Since, variable 'devQuestion' is assigned the returned function,
      it is now effectively the returned function.
   5. 'devQuestion' is now invoked which is the function inside the 'interviewQuestions' function.
*/
devQuestion('mark');

/* 
   6. 'devQuestion' need not be defined.
      We can directly call the inner function as -
*/
interviewQuestions('developer')('mark');

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/* Immediately Invoked Function Expressions (IIFE) - Data Privacy */
(function () {
    var score = Math.round(Math.random() * 10);
    // console.log(score, score >= 5);
})();

(function (goodLuck) {
    var score = Math.round(Math.random() * 10);
    // console.log(score, score >= 5 - goodLuck);
})(5);

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Closures - IMPORTANT ***/
/* 
   An inner funtion always has access to the variables
   and parameters of its outer function, even after the 
   outer function has returned.
*/
function retirementAge(retAge) {
    var stmnt = ' years until retirement.';
    return function (birthYear) {
        var age = 2020 - birthYear;
        // console.log((retAge - age) + stmnt);
    }
}
/* 
   Even though the outer function (retirementAge) has returned,
   the inner function still has access to its 'retAge' parameter
   and 'stmnt' variable when the inner (returned) function is
   invoked. REFER Udemy lecture for more details.
*/
retirementAge(62)(1990); // For India and my birthyear.
retirementAge(66)(1985); // For US and someone else' birthyear.
retirementAge(65)(1980); // For Europe and someone else' birthyear.

/* Closures - Challenge task */
// function interviewQs(job) {
//     var stmnt;
//     return function (name) {
//         if (job === 'dev') {
//             stmnt = ', what language do you work on?';
//         } else if (job === 'teacher') {
//             stmnt = ', what courses do you teach on Udemy?';
//         } else if (job === 'admin') {
//             stmnt = ', which platoform do you most work on, Unix or Mac?';
//         }

//         // console.log(name + stmnt);
//     }
// }

// var qJohn = interviewQs('teacher');
// qJohn('John');
// var qJane = interviewQs('admin');
// qJane('Jane');
// interviewQs('dev')('Mark');

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Call, Apply and Bind ***/
var john = {
    name: 'John',
    age: 30,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            // console.log('Good ' + timeOfDay + ', I\'m ' + this.name + ' and I\'m a ' + this.job + '.');
        } else if (style === 'casual') {
            // console.log('Hey everyone, I\'m ' + this.name + ' and I\'m a ' + this.job + '. Have a good ' + timeOfDay + '!');
        }
    }
};

john.presentation('formal', 'morning');
john.presentation('casual', 'evening');

var mark = {
    name: 'Mark',
    age: 31,
    job: 'developer'
};

// call()
john.presentation.call(mark, 'casual', 'night');

// apply()
john.presentation.apply(mark, ['formal', 'afternoon']);

// bind()
var markPresentation = john.presentation.bind(mark, 'casual');
markPresentation('noon');

/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */



/*** Challenge Task - Advance JS (Test your learnings) ***/
// IIFE
(function () {
    // 1.
    // Function constructor
    var Question = function (question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    // Prototype and Inheritance
    Question.prototype.displayQ = function () {
        //console.clear();
        console.log(this.question);
        for (var i = 0; i < this.options.length; i++) {
            console.log((i + 1) + '. ' + this.options[i]);
        }
    }

    // Prototype and Inheritance
    Question.prototype.checkAnswer = function (ans) {
        var sc;
        if (ans === (this.answer + 1)) {
            console.log('That is CORRECT!');
            sc = trackScore(true);
        } else {
            console.log('Sorry, try again.');
            sc = trackScore(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Your score is ' + score + '.');
        console.log('________________');
    }

    // Closure
    function score() {
        var scr = 0;
        return function (correct) {
            if (correct)
                scr++;

            return scr;
        }
    }
    var trackScore = score();


    // 2.
    var q1 = new Question('Is Javascript the coolest language?', ['Yes', 'No'], 0);
    var q2 = new Question('Who is the coolest author?', ['Mike', 'John', 'Jonas'], 2);
    var q3 = new Question('How good is Jonas?', ['Pathetic', 'Good', 'Okay', 'Awesome'], 3);

    var questions = [q1, q2, q3];

    // 3.
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length)
        questions[n].displayQ();

        var input = prompt('Enter the no. you think is correct.');

        /* Potential code for memory overflow (and browser crash) */
        if (input !== 'exit') {
            questions[n].checkAnswer(parseInt(input));
            nextQuestion();
        }
    }

    nextQuestion();
})();


/* ________________________________________ END ________________________________________ */
/* _____________________________________________________________________________________ */













