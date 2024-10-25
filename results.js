document.addEventListener("DOMContentLoaded", () => {
    const resultDetails = document.getElementById("result-details");
    
    // Retrieve existing results from local storage
    const quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    
    // Get the last result (the most recent)
    const lastResult = quizResults[quizResults.length - 1];

    if (lastResult) {
        resultDetails.innerHTML = `
            <h3>${lastResult.username}'s Result</h3>
            <p>Score: ${lastResult.score}/${lastResult.totalQuestions}</p>
            <h4>Your Answers:</h4>
            <ul>
                ${lastResult.userAnswers.map(answer => `
                    <li>
                        <strong>${answer.question}</strong><br>
                        Your Answer: <span class="${answer.userAnswer === answer.correctAnswer ? 'correct' : 'wrong'}">${answer.userAnswer}</span><br>
                        ${answer.userAnswer !== answer.correctAnswer ? `<strong>Correct Answer:</strong> <span class="correct">${answer.correctAnswer}</span>` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
    } else {
        resultDetails.innerHTML = `<p>No results found.</p>`;
    }
});
