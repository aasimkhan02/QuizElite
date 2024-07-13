var set1 = {
    questions: [
        "/static/images/flags/Afghanistan.png",
        "/static/images/flags/Australia.png",
        "/static/images/flags/Bahrain.png",
        "/static/images/flags/Cambodia.png",
        "/static/images/flags/france.png",
        "/static/images/flags/Ivory Coast.png",
        "/static/images/flags/Laos.png",
        "/static/images/flags/lebanaon.png",
        "/static/images/flags/Panama.png",
        "/static/images/flags/Samoa.png",
        "/static/images/flags/San Marino.png",
        "/static/images/flags/Sweden.png",
        "/static/images/flags/Trinidad and Tobago.png",
        "/static/images/flags/Uganda.png"
    ],
    options: [
        ["Syria", "Egypt", "Afghanistan", "Pakistan"],
        ["New Zealand", "United Kingdom", "Australia", "United States"],
        ["Qatar", "Kuwait", "Oman", "Bahrain"],
        ["Thailand", "Vietnam", "Myanmar", "Cambodia"],
        ["Italy", "Spain", "France", "Netherlands"],
        ["Ghana", "Nigeria", "Liberia", "Ivory Coast"],
        ["Vietnam", "Thailand", "Myanmar", "Laos"],
        ["Israel", "Jordan", "Syria", "Lebanon"],
        ["Costa Rica", "Panama", "Guatemala", "Honduras"],
        ["Fiji", "Tonga", "Vanuatu", "Samoa"],
        ["Italy", "Vatican City", "San Marino", "Malta"],
        ["Norway", "Finland", "Denmark", "Sweden"],
        ["Trinidad and Tobago", "Jamaica", "Barbados", "Saint Lucia"],
        ["Kenya", "Tanzania", "Uganda", "Ethiopia"]
    ],
    answers: ["Afghanistan", "Australia", "Bahrain", "Cambodia", "France", "Ivory Coast", "Laos", "Lebanon", "Panama", "Samoa", "San Marino", "Sweden", "Trinidad and Tobago", "Uganda"]
};

var set3 = {
    questions: [
        "/static/images/landmarks/angor wat.jpg",
        "/static/images/landmarks/big ben.jpg",
        "/static/images/landmarks/castle.jpg",
        "/static/images/landmarks/ChristTheRedeemer.jpg",
        "/static/images/landmarks/Colossuem.jpg",
        "/static/images/landmarks/Tokyo tower.jpg",
        "/static/images/landmarks/great wall of china.jpg",
        "/static/images/landmarks/hagia.jpg",
        "/static/images/landmarks/Leaning Tower of pisa.jpg",
        "/static/images/landmarks/machu.jpg",
        "/static/images/landmarks/opera house.jpg",
        "/static/images/landmarks/Petra.jpg",
        "/static/images/landmarks/Pyramid of Giza.jpg",
        "/static/images/landmarks/Statue of liberty.jpg",
        "/static/images/landmarks/taj mahal.jpg"
    ],
    options: [
        ["Borobudur Temple ", "Ta Prohm Temple", "Bagan Temples ", "Angor wat"],
        ["Tower Bridge", "Palace of Westminster", "Big Ben", "St. Stephen's Basilica"],
        ["Neuschwanstein Castle", "Hohenzollern Castle", "Eltz Castle", "Wartburg Castle "],
        ["Christ the Redeemer", "Statue of Liberty", "Cristo Rei", "Cristo de la"],
        ["Pompeii ", "Pantheon", "Roman Forum", "Colosseum"],
        ["Space Needle", "CN Tower", "Tokyo tower", "Eiffel Tower"],
        ["The Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Antonine Wall"],
        ["Basilica Cistern ", "Hagia Sophia", "Topkapi Palace", "Blue Mosque "],
        ["Torre del Mangia ", "Torre degli Asinelli", "Leaning Tower of Pisa", "Tower of Bologna "],
        ["Machu Picchu", "Ciudad Perdida", "Choquequirao ", "Kuelap"],
        ["Sydney Harbour Bridge", "Palais Garnier ", "La Scala", "Sydney Opera House"],
        ["Wadi Rum", "Jerash", "Petra", "Qasr al-Bint "],
        ["Pyramid of Giza", "Pyramid of Djoser", "Bent Pyramid", "Red Pyramid"],
        ["Statue of Unity ", "The Motherland Calls", "Christ the Redeemer", "Statue of Liberty"],
        ["Humayun's Tomb ", "Taj Mahal", "Agra Fort", "Fatehpur Sikri "]
    ],
    answers: ["Angor wat", "Big Ben", "Neuschwanstein Castle", "Christ the Redeemer", "Colosseum", "Tokyo tower", 
    "Great Wall of China", "Hagia Sophia", "Leaning Tower of Pisa", "Machu Picchu", "Sydney Opera House", "Petra", 
    "Pyramid of Giza", "Statue of Liberty", "Taj Mahal"]

};

var currentQuestionIndex = 0;
var countdownInterval;
var progressInterval;
var autoProgressInterval;
var correctAnswers = 0;
var wrongAnswers = 0;

function shuffleData(questions, options, answers) {
    var currentIndex = questions.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [questions[currentIndex], questions[randomIndex]] = [questions[randomIndex], questions[currentIndex]];
        [options[currentIndex], options[randomIndex]] = [options[randomIndex], options[currentIndex]];
        [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]];
    }

    return [questions, options, answers];
}

function startQuiz() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var key = urlParams.get('key');

    var startButton = document.getElementById("startButton");
    var quizMessage = document.getElementById("quizMessage");
    var actualQuiz = document.getElementById("Quiz");
    var timeBarContainer = document.getElementById("timeBarContainer");
    var countdownClock = document.getElementById("countdownClock");
    var questionContainer = document.getElementById("question-container");
    var optionContainer = document.getElementById("option-container");
    var correctScoreElement = document.getElementById("correctScore");
    var wrongScoreElement = document.getElementById("wrongScore");

    correctScoreElement.textContent = "0";
    wrongScoreElement.textContent = "0";
    startButton.style.display = "none";
    quizMessage.style.display = "block";

    setTimeout(function(){
        quizMessage.style.display = "none";
        actualQuiz.style.display = "block";

        var selectedSet;
        if (key === "1") {
            selectedSet = set1;
        } else if (key === "3") {
            selectedSet = set3;
        }

        var shuffledData = shuffleData(selectedSet.questions.slice(), selectedSet.options.slice(), selectedSet.answers.slice());
        questions = shuffledData[0];
        options = shuffledData[1];
        answers = shuffledData[2];

        startCountdown(countdownClock);
        startProgressBar(timeBarContainer);

        populateQuestionAndOptions(questionContainer, optionContainer, currentQuestionIndex);
        addOptionButtonListeners();
        updateQuestionText(key); // Call to update the question text
    }, 2000); // 2 seconds
}

function updateQuestionText(key) {
    var questionText = document.querySelector(".question");
    if (key === "1") {
        questionText.textContent = "Guess the Flag:";
    } else if (key === "3") {
        questionText.textContent = "Guess the Landmark:";
    }
}


function addOptionButtonListeners() {
    var optionButtons = document.querySelectorAll("#option-container button");
    optionButtons.forEach(button => {
        button.addEventListener("click", function() {
            var selectedOption = button.textContent;
            resetAutoProgressTimer();
            var correctOption = answers[currentQuestionIndex];
            checkAnswer(selectedOption, correctOption);
            setTimeout(moveToNextQuestion, 1000);
        });
    });
}

function populateQuestionAndOptions(questionContainer, optionContainer, index) {
    questionContainer.innerHTML = "";
    optionContainer.innerHTML = "";

    // Create an img element for the question
    var questionImage = document.createElement("img");
    questionImage.src = questions[index]; // Set the src attribute to the URL of the image
    questionContainer.appendChild(questionImage);

    var shuffledOptions = options[index].slice().sort(() => Math.random() - 0.5);

    for (var j = 0; j < shuffledOptions.length; j++) {
        var optionButton = document.createElement("button");
        optionButton.textContent = shuffledOptions[j];
        optionContainer.appendChild(optionButton);
    }

    var optionButtons = optionContainer.querySelectorAll("button");
    optionButtons.forEach(button => {
        button.addEventListener("click", function() {
            var selectedOption = this.textContent;
            var correctOption = answers[index];
            checkAnswer(selectedOption, correctOption);
            setTimeout(moveToNextQuestion, 1000);
        });
    });

    resetAutoProgressTimer();
}


function endQuiz() {
    // Hide the quiz elements
    document.getElementById("Quiz").style.display = "none";

    // Show the end message with the score
    var endMessage = document.getElementById("endMessage");
    var correctScoreElement = document.getElementById("correctScore");
    var wrongScoreElement = document.getElementById("wrongScore");
    correctScoreElement.textContent = "Correct answers: " + correctAnswers;
    wrongScoreElement.textContent = "Wrong answers: " + wrongAnswers;
    endMessage.style.display = "flex"; // Make sure end message is visible
}

function restartQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    // Display the start button and hide the end message
    var startButton = document.getElementById("startButton");
    var endMessage = document.getElementById("endMessage");
    startButton.style.display = "block";
    endMessage.style.display = "none";

    // Start the quiz again
    startQuiz();
}

function startCountdown(countdownClock) {
    var seconds = 30;

    countdownClock.style.display = "block";
    countdownClock.textContent = formatTime(seconds);

    countdownInterval = setInterval(function() {
        seconds--;
        countdownClock.textContent = formatTime(seconds);

        if (seconds <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function restartCountdown(countdownClock) {
    clearInterval(countdownInterval);
    startCountdown(countdownClock);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function startProgressBar(timeBarContainer) {
    timeBarContainer.style.display = "block";

    var timeBarFiller = document.getElementById("filler");
    var maxHeight = timeBarContainer.offsetHeight;

    var width = 0;
    progressInterval = setInterval(function() {
        width += (maxHeight / 30) / maxHeight * 100;

        if (width > 100) {
            width = 100;
        }

        timeBarFiller.style.height = width + '%';

        if (width >= 100) {
            clearInterval(progressInterval);
        }
    }, 1000);
}

function restartProgressBar(timeBarContainer) {
    clearInterval(progressInterval);
    startProgressBar(timeBarContainer);
}

function resetAutoProgressTimer() {
    clearTimeout(autoProgressInterval);
    startAutoProgressTimer();
}

function startAutoProgressTimer() {
    autoProgressInterval = setTimeout(moveToNextQuestion, 30000);
}

function checkAnswer(selectedOption, correctOption) {
    var optionButtons = document.querySelectorAll("#option-container button");
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctOption) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
    });

    if (selectedOption === correctOption) {
        incrementCorrectScore();
        console.log("Correct Answer");
    } else {
        incrementWrongScore();
        console.log("Wrong Answer");
    }
}

function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        var questionContainer = document.getElementById("question-container");
        var optionContainer = document.getElementById("option-container");
        populateQuestionAndOptions(questionContainer, optionContainer, currentQuestionIndex);
        restartCountdown(document.getElementById("countdownClock"));
        restartProgressBar(document.getElementById("timeBarContainer"));
    } else {
        endQuiz();
    }
}

function incrementCorrectScore() {
    correctAnswers++;
    var correctScoreElement = document.getElementById("correctScore");
    correctScoreElement.textContent = "Correct answers: " + correctAnswers;
}

function incrementWrongScore() {
    wrongAnswers++;
    var wrongScoreElement = document.getElementById("wrongScore");
    wrongScoreElement.textContent = "Wrong answers: " + wrongAnswers;
}