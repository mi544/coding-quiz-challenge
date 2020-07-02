// $("header").attr("style", "display: none;");

var secondsLeft = 60;

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
    "This is the question in 2question!"
    "This is the ques5tion in q2uestion!",
    "This is the ques5tion in q2uestion!"
]

var quizAnswers = [
    ["amswers", "answers", "asnwers", "asnwers"],
    ["amswers", "answers", "asnwers", "asnwers"],
    ["amswers", "answers", "asnwers", "asnwers"],
    ["amswers", "answers", "asnwers", "asnwers"]
]

// Checking if code is correct and number of questions matches number of objects of answers
if (quizQuestions.length !== quizAnswers.length) {
    alert("Incorrect data!");
}


for (var i = 0; i < quizQuestions.length; i++) {
    $(".question").text(quizQuestions[i]);
    $(".question").attr("style", "display: block;")
    for (var j = 1; j < 5; j++) {
        $("#button-" + j).text(quizAnswers[i][j]);

        $("#button-" + j).attr("style", "display: block;");
    }

}



// Do this AFTER all the values are correct there
$("main").attr("style", "display: block;");