var i = 0;
var j = 0;
var secondsLeft = 60;
var answersCounter = 0;
var highscoreArray = [];
var check = "";

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

    // Removing Right/Wrong Answer elements
    $("hr").remove();
    $("#confirmation").remove();

    // Displaying End Header
    $("main").prepend($("<h4>").attr("class", "end").text("End of the Quiz!"));
    // Final Score Information
    $("main").append($("<h5>").attr("class", "score").text(`Your final score is: ${answersCounter} !`));

    // Adding input field and label
    $("main").append($("<label>").attr({
        "for": "initials"
    }).text("Enter your initials:"));
    $("main").append($("<input>").attr({
        "type": "text",
        "id": "initials",
        "name": "initials"
    }).text("Enter your initials:"));

    // Adding button to save
    $("main").append($("<button>").attr("class", "submit-results").text("Submit!"));

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
        answersCounter += 10;
        i++;
        clearEverything();
        displayEverything();
    } else {
        rightOrWrong(false);
        answersCounter -= 10;
        secondsLeft -= 5;
        i++;
        clearEverything();
        displayEverything();
    }
});

// Timer
var timerInterval = setInterval(function () {
        secondsLeft--;
        $("#timer").text(`Time: ${secondsLeft}`)

        if (!secondsLeft || i === quizQuestions.length || check === "ppp") {
            clearInterval(timerInterval);

            endQuiz();

            $(".submit-results").click(function () {
                // Pushing highscores to array
                highscoreArray.push($("#initials").val() + ": " + answersCounter + "\n");

                // Converting array to string using JSON.stringify()
                localStorage.setItem("highscore", JSON.stringify(highscoreArray));
            });

        }
    },
    1000);



$(".show-highscore").click(function () {

    // Assigning ppp to show timer that we need it off
    check = "ppp";

    // var highsArr = JSON.parse(localStorage.getItem("highscore"));
    // for (var o = 0; 0 < highsArr.length; o++) {
    //     $("main").append($("p").text(highsArr[o]));
    // }


    // $("main").append($("<h3>").attr("id", "confirmation").text("Right answer!"));


})
// ON OPEN HIGHSCORES DESTRINGIFY