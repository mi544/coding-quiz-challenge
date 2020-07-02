// $("header").attr("style", "display: none;");
var i = 0;
var j = 0;
var secondsLeft = 5;
var correctAnswersCounter = 0;
var wrongAnswersCounter = 0;

var quizQuestions = [
    "Thi111s is the question in question!",
    "This is the question in 2question!",
    "This is the ques5tion in q2uestion!",
    "This is the ques5tion in q2uestion!",
]

var quizAnswers = [
    ["1", "22", "3", "4"],
    ["3", "2", "1", "4"],
    ["1", "4", "5", "2"],
    ["2", "66", "2", "11"],
]

var correctAnswers = [
    "2",
    "3",
    "1",
    "66",
]

// Displays both Question and Answers 
function displayEverything() {
    // Displays Question
    function displayQuestion() {
        var questionToAdd = $("<h4>");
        questionToAdd.attr("class", "question");
        questionToAdd.text(quizQuestions[i]);
        questionToAdd.text(quizQuestions[i]);
        $("main").prepend(questionToAdd);
    }
    // Displays Answers
    function displayAnswers() {
        for (j = 0; j < quizAnswers.length; j++) {
            var buttonToAdd = $("<button>");
            buttonToAdd.attr("class", "answer-button");
            // buttonToAdd.attr("id", "button-" + (j + 1));
            buttonToAdd.text(quizAnswers[i][j]);
            $(".buttons").append(buttonToAdd);
        }
    }

    displayQuestion();
    displayAnswers();
    i++;
}

function clearEverything() {
    $(".question").remove();
    $(".buttons").empty();
}

$(".answer-button").click(function () {
    var thatText = $(this).text();
    if (thatText === correctAnswers[i]) {
        correctAnswersCounter += 1;
    }
});

var timerInterval = setInterval(function () {
    secondsLeft--;
    $("#timer").text(`Time: ${secondsLeft}`)

    if (!secondsLeft || i === quizQuestions.length) {
        clearInterval(timerInterval);
        clearEverything();
        // TODO ADD WHATEVER HAPPENS WHEN TIMER'S OVER
    }
}, 1000);


displayEverything();