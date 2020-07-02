// $("header").attr("style", "display: none;");
var i = -1;
var j = 0;
var secondsLeft = 60;
var correctAnswersCounter = 0;
var wrongAnswersCounter = 0;


var timerInterval = setInterval(function () {
    secondsLeft--;
    $("#timer").text(`Time: ${secondsLeft}`)

    if (!secondsLeft) {
        clearInterval(timerInterval);
        // TODO ADD WHATEVER HAPPENS WHEN TIMER'S OVER
    }
}, 1000);

var quizQuestions = [
    "Thi111s is the question in question!",
    "This is the question in 2question!",
    "This is the ques5tion in q2uestion!",
    "This is the ques5tion in q2uestion!",
]

var quizAnswers = [
    ["1", "2", "3", "4"],
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

// Checking if code is correct and number of questions matches number of objects of answers
if (quizQuestions.length !== quizAnswers.length) {
    alert("Incorrect data!");
}



// Displays Question
function displayQuestion() {
    $(".question").text(quizQuestions[i]);
    $(".question").attr("style", "display: block;");
}

// Displays Answers
function displayAnswers() {
    for (j = 0; j < quizAnswers.length; j++) {
        $("#button-" + (j + 1)).text(quizAnswers[i][j]);
        $("#button-" + (j + 1)).attr("style", "display: block;");
    }
}

// Displays both Question and Answers 
function displayEverything() {
    i++;
    displayQuestion(i);
    displayAnswers(i);
}

displayEverything();

$(".answer-button").click(function () {
    var thatText = $(this).text();
    if (thatText === correctAnswers[i]) {
        correctAnswersCounter += 1;
    }
});

// $(".answer-button").click(function () {
//     if ($(this).text === correctAnswers[i]) {
//         correctAnswersCounter += 1;
//         console.log("a" + correctAnswersCounter);
//         console.log("b" + wrongAnswersCounter);
//         console.log("c" + correctAnswers[i]);
//         console.log("d" + i);


//         // TODO LESS TIMER NOW
//     } else {
//         wrongAnswersCounter += 1;
//         console.log("a" + correctAnswersCounter);
//         console.log("b" + wrongAnswersCounter);
//         console.log("c" + correctAnswers[i]);
//         console.log("d" + i);
//     }

// });