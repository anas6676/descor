const questions = [
    // ... (previous questions)

    {
        question: "What is the traditional German outfit for men called?",
        answers: ["Dirndl", "Lederhosen", "Kilt", "Sombrero"],
        correct: 1
    },
    {
        question: "Which of these is a famous German festival?",
        answers: ["Oktoberfest", "La Tomatina", "Carnival of Venice", "Running of the Bulls"],
        correct: 0
    },
    {
        question: "What is the capital city of Germany?",
        answers: ["Munich", "Hamburg", "Frankfurt", "Berlin"],
        correct: 3
    },
    {
        question: "Which river is NOT in Germany?",
        answers: ["Rhine", "Elbe", "Danube", "Thames"],
        correct: 3
    },
    {
        question: "What is the traditional German afternoon ritual of having coffee and cake called?",
        answers: ["Siesta", "Tea Time", "Kaffee und Kuchen", "Fika"],
        correct: 2
    },
    {
        question: "Which of these philosophers is NOT German?",
        answers: ["Immanuel Kant", "Friedrich Nietzsche", "Karl Marx", "Jean-Paul Sartre"],
        correct: 3
    },
    {
        question: "What is the name of the German parliament building in Berlin?",
        answers: ["Bundestag", "Reichstag", "Rathaus", "Schloss"],
        correct: 1
    },
    {
        question: "Which sport is most popular in Germany?",
        answers: ["Basketball", "Cricket", "Football (Soccer)", "Tennis"],
        correct: 2
    },
    {
        question: "What is the traditional Christmas market in Germany called?",
        answers: ["Winterfest", "Christkindlmarkt", "Noel Bazaar", "Santa's Village"],
        correct: 1
    },
    {
        question: "Which of these is a traditional German sausage?",
        answers: ["Chorizo", "Bratwurst", "Salami", "Andouille"],
        correct: 1
    },
    {
        question: "What is the German word for 'cheers' when toasting?",
        answers: ["Salud", "Prost", "Slainte", "Na zdorovie"],
        correct: 1
    },
    {
        question: "Which fairy tale authors were German?",
        answers: ["Hans Christian Andersen", "The Brothers Grimm", "Charles Perrault", "Aesop"],
        correct: 1
    },
    {
        question: "What is the name of the German autobahn system?",
        answers: ["Schnellstraße", "Bundesstraße", "Autobahn", "Straßenbahn"],
        correct: 2
    },
    {
        question: "Which of these is NOT a bordering country of Germany?",
        answers: ["France", "Belgium", "Spain", "Denmark"],
        correct: 2
    },
    {
        question: "What is the traditional German bread pretzel called?",
        answers: ["Brezel", "Strudel", "Baguette", "Ciabatta"],
        correct: 0
    },
    {
        question: "Which German city is famous for its annual film festival?",
        answers: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
        correct: 2
    },
    {
        question: "What is the German term for a small garden plot rented by city dwellers?",
        answers: ["Stadtgarten", "Kleingarten", "Schrebergarten", "Blumengarten"],
        correct: 2
    },
    {
        question: "Which of these is a traditional German dessert?",
        answers: ["Tiramisu", "Schwarzwälder Kirschtorte", "Crème Brûlée", "Baklava"],
        correct: 1
    },
    {
        question: "What is the German federal police force called?",
        answers: ["Polizei", "Bundespolizei", "Ordnungsamt", "Sicherheitsdienst"],
        correct: 1
    },
    {
        question: "Which German scientist is famous for his theory of relativity?",
        answers: ["Max Planck", "Werner Heisenberg", "Albert Einstein", "Johannes Kepler"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score-value");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
    
    resultElement.textContent = "";
    nextButton.style.display = "none";
    updateProgressBar();
}

function selectAnswer(index) {
    const question = questions[currentQuestion];
    const buttons = answersElement.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.disabled = true;
    }
    
    if (index === question.correct) {
        buttons[index].style.backgroundColor = "#4CAF50";
        resultElement.textContent = "Correct!";
        score++;
    } else {
        buttons[index].style.backgroundColor = "#f44336";
        buttons[question.correct].style.backgroundColor = "#4CAF50";
        resultElement.textContent = "Incorrect. The correct answer was: " + question.answers[question.correct];
    }
    
    scoreElement.textContent = score;
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function updateProgressBar() {
    const progress = (currentQuestion / questions.length) * 100;
    progressBar.style.setProperty('--progress', `${progress}%`);
}

function endGame() {
    questionElement.textContent = "Quiz completed!";
    answersElement.innerHTML = "";
    resultElement.textContent = `Your final score is ${score} out of ${questions.length}.`;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();