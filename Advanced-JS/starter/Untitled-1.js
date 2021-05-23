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
    Question.prototype.checkAnswer = function (ans, fn) {
        var sc = 0;
        if (ans === (this.answer + 1)) {
            console.log('That is CORRECT!');
            sc = fn(true);
        }
        else {
            console.log('Sorry, try again.');
            sc = fn(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Your score is ' + score + '.');
        console.log('__________________________');
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
            questions[n].checkAnswer(parseInt(input), trackScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();