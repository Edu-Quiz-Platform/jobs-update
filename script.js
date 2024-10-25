const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
        answer: "Islamabad"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote the national anthem of Pakistan?",
        options: ["Allama Iqbal", "Faiz Ahmed Faiz", "Hafeez Jullundhri", "Ahmad Faraz"],
        answer: "Hafeez Jullundhri"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let username = "";

// Start Quiz
function startQuiz() {
    const nameInput = document.getElementById("username").value;
    if (!nameInput) {
        alert("Please enter your name to start the quiz.");
        return;
    }
    
    username = nameInput;
    document.getElementById("username").style.display = "none";
    document.querySelector("label[for='username']").style.display = "none";
    document.querySelector("button[onclick='startQuiz()']").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("submit-btn").style.display = "inline-block";
    
    displayQuestion();
}

// Display Questions
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        ${question.options.map(option => `
            <label>
                <input type="radio" name="answer" value="${option}"> ${option}
            </label><br>
        `).join('')}
    `;
}

// Submit Quiz
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer before submitting.");
        return;
    }
    
    const userAnswer = selectedOption.value;
    userAnswers.push({
        question: questions[currentQuestionIndex].question,
        userAnswer,
        correctAnswer: questions[currentQuestionIndex].answer
    });

    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        saveResultToLocalStorage();
        window.location.href = "results.html"; // Redirect to result page
    }
}

// Save Result to Local Storage
function saveResultToLocalStorage() {
    const resultData = {
        username,
        score,
        totalQuestions: questions.length,
        userAnswers,
        timestamp: new Date().toLocaleString() // Save time of attempt
    };

    // Retrieve existing results from local storage
    const existingResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    
    // Add new result to existing results
    existingResults.push(resultData);
    
    // Save back to local storage
    localStorage.setItem("quizResults", JSON.stringify(existingResults));
}

// Reset Quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("question-container").style.display = "none";
}
