const questions = [
    {
        question: "When was the Shanghai Cooperation Organization (SCO) summit held in Islamabad in 2024?",
        options: ["October 1-3", "October 10-12", "October 15-16", "October 20-21"],
        answer: "October 15-16"
    },
    {
        question: "How many paramilitary personnel were deployed for security during the 2024 SCO summit in Islamabad?",
        options: ["5,000", "7,500", "10,000", "15,000"],
        answer: "10,000"
    },
    {
        question: "Which new country was admitted to the SCO during the 2024 summit in Islamabad?",
        options: ["Nepal", "Mongolia", "Iran", "Republic of Congo"],
        answer: "Republic of Congo"
    },
    {
        question: "What key aspect did Pakistan emphasize in the SCO 2024 summit?",
        options: ["Military alliances", "Regional economic integration", "Border control", "Nuclear collaboration"],
        answer: "Regional economic integration"
    },
    {
        question: "What was one primary area of focus at the SCO 2024 summit?",
        options: ["Space exploration", "Climate change", "Healthcare", "Agricultural subsidies"],
        answer: "Climate change"
    },
    {
        question: "Which transport project did Pakistan highlight as essential for SCO connectivity?",
        options: ["BRI", "INSTC", "CPEC", "TAPI"],
        answer: "INSTC"
    },
    {
        question: "Which country proposed the creation of an independent payment system in the SCO to reduce reliance on the U.S. dollar?",
        options: ["Russia", "China", "India", "Pakistan"],
        answer: "Russia"
    },
    {
        question: "During the SCO summit, Pakistan underscored the need for which country's stability?",
        options: ["Afghanistan", "Iran", "Bangladesh", "Uzbekistan"],
        answer: "Afghanistan"
    },
    {
        question: "Who represented India at the SCO Council of Heads of Government in 2024?",
        options: ["Prime Minister Narendra Modi", "Foreign Minister S. Jaishankar", "President Ram Nath Kovind", "Defense Minister Rajnath Singh"],
        answer: "Foreign Minister S. Jaishankar"
    },
    {
        question: "Which country within the SCO is seen as having closer ties to both Pakistan and China?",
        options: ["Russia", "India", "Kazakhstan", "Uzbekistan"],
        answer: "China"
    },
    {
        question: "Which initiative was emphasized by China for further security cooperation within SCO member states?",
        options: ["Asia Defense Protocol", "Global Security Initiative", "NATO Collaboration", "ASEAN Defense Initiative"],
        answer: "Global Security Initiative"
    },
    {
        question: "Which SCO project aims to expand digital and infrastructural connectivity?",
        options: ["CPEC", "INSTC", "SCO Digital Pathways", "SCO Smart Initiative"],
        answer: "INSTC"
    },
    {
        question: "What is the primary goal of the SCO 2030 Economic Development Strategy?",
        options: ["Militarization of borders", "E-commerce growth", "Economic and social stability", "Reduction in national debts"],
        answer: "Economic and social stability"
    },
    {
        question: "Which key global issue did SCO members discuss regarding a UN resolution?",
        options: ["Terrorism", "One Earth, One Family, One Future", "Nuclear disarmament", "Digital rights"],
        answer: "One Earth, One Family, One Future"
    },
    {
        question: "Which high-profile figure visited Pakistan in October 2024 amid SCO security concerns?",
        options: ["Vladimir Putin", "Xi Jinping", "Dr. Zakir Naik", "Emmanuel Macron"],
        answer: "Dr. Zakir Naik"
    },
    {
        question: "In which city were security measures heightened due to SCO and public gatherings?",
        options: ["Karachi", "Islamabad", "Peshawar", "Lahore"],
        answer: "Islamabad"
    },
    {
        question: "What was a notable environmental topic at the 2024 SCO summit?",
        options: ["Combating desertification", "Water management", "Green development", "Soil erosion"],
        answer: "Green development"
    },
    {
        question: "Which city faced security lockdowns in Pakistan in mid-October due to the SCO summit?",
        options: ["Rawalpindi", "Lahore", "Islamabad", "Karachi"],
        answer: "Islamabad"
    },
    {
        question: "What major agreement regarding climate change did the SCO emphasize?",
        options: ["Green Belt Partnership", "Net-Zero Initiative", "SCO Green Deal", "Climate Cooperation Pact"],
        answer: "SCO Green Deal"
    },
    {
        question: "What did Pakistan propose to counter global economic inequality within the SCO?",
        options: ["Wealth redistribution", "Inclusive growth strategies", "Higher taxes on developed nations", "Debt forgiveness programs"],
        answer: "Inclusive growth strategies"
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
