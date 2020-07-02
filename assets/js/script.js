var i = 0;
var j = 0;
var secondsLeft = 60;
AnswersCounter = 0;

var quizQuestions = [
    "Commonly used data types DO NOT include:",
    "String values must be enclosed within ... when being assigned to variables.",
    "Arrays in JavaScript can be used to store ...",
    "A very useful tool used during development and debugging for printing content to the debugger is:",
    "The condition in an if/else statement is enclosed within ..."
]

var quizAnswers = [
    ["Strings", "Booleans", "Alerts", "Numbers"],
    ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
    ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
]

var correctAnswers = [
    "Alerts",
    "Quotes",
    "All of the Above",
    "Console.log",
    "Parentheses",
]

// Displays both Question and Answers 
function displayEverything() {
    // Displays Question
    function displayQuestion() {
        var questionToAdd = $("<h4>");
        questionToAdd.attr("class", "question");
        questionToAdd.text(quizQuestions[i]);
        $("main").prepend(questionToAdd);
    }
    // Displays Answers
    function displayAnswers() {
        for (j = 0; j < quizAnswers[i].length; j++) {
            $(".buttons").append($("<button>").attr("class", "answer-button").text(quizAnswers[i][j]));
        }
    }

    displayQuestion();
    displayAnswers();
}

function clearEverything() {
    $(".question").remove();
    $(".buttons").empty();
}

function endQuiz() {
    clearEverything();
    $(".buttons").remove();

    // Displaying End Header
    $("main").prepend($("<h4>").attr("class", "end").text("End of the Quiz!"));

    $("main").append($("input").attr("class", "initials"));
    // Displaying input field

    $("hr").remove();
    $("#confirmation").remove();
}

function rightOrWrong(bool) {
    if ($("hr") && $("#confirmation")) {
        $("hr").remove();
        $("#confirmation").remove();
    }

    if (bool) {
        $("main").append($("<hr />"));
        $("main").append($("<h3>").attr("id", "confirmation").text("Right answer!"));
    } else {
        $("main").append($("<hr />"));
        $("main").append($("<h3>").attr("id", "confirmation").text("Wrong answer!"));
    }
}


// Displaying Everything first time
displayEverything();

$(".buttons").click(function (event) {
    if (event.target.textContent === correctAnswers[i]) {
        rightOrWrong(true);
        AnswersCounter += 10;
        i++;
        clearEverything();
        displayEverything();
    } else {
        rightOrWrong(false);
        AnswersCounter -= 10;
        i++;
        clearEverything();
        displayEverything();
    }
});


var timerInterval = setInterval(function () {
    secondsLeft--;
    $("#timer").text(`Time: ${secondsLeft}`)

    if (!secondsLeft || i === quizQuestions.length) {
        clearInterval(timerInterval);
        endQuiz();
        // TODO ADD WHATEVER HAPPENS WHEN TIMER'S OVER
    }
}, 1000);