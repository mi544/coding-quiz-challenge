// question counter
var qC = 0;
// answer counter
var aC = 0;
// total seconds for interval
var sec = 60;
// total score
var score = 0;
//

var highscoreArray = [];
//
var check = "";



// Generates elements for the welcome screen,
// to be showed when opening or refreshing
// the website
function welcomeScreen() {
    // Section for the welcome header
    $("main").append($("<section>").attr("class", "welcome-h-section"));
    // Welcome header
    $(".welcome-h-section").append($("<h1>").attr("class", "welcome-h").text(arr.pageText.welcomeH));

    // Section for the welcome text
    $("main").append($("<section>").attr("class", "welcome-text-section"));
    // Looping through all the paragraphs with welcome text
    arr.pageText.welcomeP.forEach(function (p) {
        $(".welcome-text-section").append($("<p>").attr("class", "welcome-text").text(p));
    })

    // Section for the start button
    $("main").append($("<section>").attr("class", "start-button-section"));
    // Start button
    $(".start-button-section").append($("<button>").attr("class", "start-button").text("Start!"));
}



// Generates questions and answers 
function generateQueAns() {
    // Section for question
    // with an if conditional to not generate if already exists
    // (preserve resources)
    if (!$(".question-section")[0]) {
        $("main").append($("<section>").attr("class", "question-section"))
    }

    // Displays Question
    $(".question-section").append($("<h2>").attr("class", "question").text(arr.quizQuestions.que[qC]));


    // Generates a "section" to put our buttons in
    // with an if conditional to not generate if already exists
    // (preserve resources)
    if (!$(".buttons-section")[0]) {

        $("main").append($("<section>").attr("class", "buttons-section"));
    }

    // Displays Answers
    for (aC = 0; aC < arr.quizQuestions.ans[qC].length; aC++) {
        $(".buttons-section").append($("<button>").attr("class", "answer-button").text(arr.quizQuestions.ans[qC][aC]));
    }

}

// Clears questions and answers sections
function clearQueAns() {
    // Emptying <h4> for questions
    $(".question-section").empty();
    // Emptying <section> for answers
    $(".buttons-section").empty();
}

// Starts the quiz by calling other functions
// in order to build the structure
// and display questions and answers
function startQuiz() {
    // Timer interval performs every second
    // checking if it's out of time
    var timerI = setInterval(
        function () {
            sec--;
            $("#time").text(`Time: ${sec}`);
            if (!sec) {
                clearInterval(timerI);
                endQuiz();
            }
        }

        , 1000);

    // Clearing the Welcome Screen
    $("main").empty();

    // Generating first question
    generateQueAns();
}


function endQuiz() {
    // Clearing everything on the page
    $("main").empty();

    // Section for headers and score
    $("main").append($("<section>").attr("class", "end-section"));

    // Generating an end header
    $(".end-section").append($("<h2>").attr("class", "end").text("End of the Quiz!"));
    // Generating final score
    $(".end-section").append($("<h3>").attr("class", "score").text(`Your final score is: ${score} !`));

    // Section for the submit elements
    $("main").append($("<section>").attr("class", "submit-section"));

    // Adding an input field and a label
    $(".submit-section").append($("<label>").attr("for", "initials").text("Enter your initials:"));
    $(".submit-section").append($("<input>").attr({
        "type": "text",
        "id": "initials",
        "name": "initials"
    }).text("Enter your initials:"));

    // Adding a submit button
    $(".submit-section").append($("<button>").attr("class", "submit-results").text("Submit!"));

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


// Generating the Welcome Screen
welcomeScreen();

//eventListener for the start quiz button
$(".start-button").on("click", function () {
    startQuiz();
});


// eventListener for answer buttons
$("body").on("click", ".answer-button", function () {
    if (qC === arr.quizQuestions.que.length - 1) {
        endQuiz();
    } else {
        clearQueAns();
        qC++;
        generateQueAns();

    }
});

// eventListener for submit buttons
$("body").on("click", ".submit-results", function () {

});