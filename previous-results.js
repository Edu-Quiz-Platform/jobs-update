document.addEventListener("DOMContentLoaded", () => {
    const resultsDropdown = document.getElementById("results-dropdown");
    const resultDetailsDropdown = document.getElementById("result-details-dropdown");

    // Populate dropdown with previous results
    populateDropdown();

    // Function to populate dropdown
    function populateDropdown() {
        const quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
        resultsDropdown.innerHTML = `<option value="">Select a User</option>`;
        
        quizResults.forEach((result, index) => {
            const option = document.createElement("option");
            option.value = index; // Use index to reference the result
            option.textContent = result.username;
            resultsDropdown.appendChild(option);
        });
    }

    // Function to display result details based on selection
    window.displayResultDetails = function() {
        const selectedIndex = resultsDropdown.value;
        resultDetailsDropdown.innerHTML = ""; // Clear previous details
        
        if (selectedIndex !== "") {
            const quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
            const selectedResult = quizResults[selectedIndex];
            
            if (selectedResult) {
                resultDetailsDropdown.innerHTML = `
                    <h3>${selectedResult.username}'s Result</h3>
                    <p>Score: ${selectedResult.score}/${selectedResult.totalQuestions}</p>
                    <h4>Your Answers:</h4>
                    <ul>
                        ${selectedResult.userAnswers.map(answer => `
                            <li>
                                <strong>${answer.question}</strong><br>
                                Your Answer: <span class="${answer.userAnswer === answer.correctAnswer ? 'correct' : 'wrong'}">${answer.userAnswer}</span><br>
                                ${answer.userAnswer !== answer.correctAnswer ? `<strong>Correct Answer:</strong> <span class="correct">${answer.correctAnswer}</span>` : ''}
                            </li>
                        `).join('')}
                    </ul>
                `;
            }
        }
    };
});
