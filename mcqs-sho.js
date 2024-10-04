let showAnswers = false; // To track the visibility of answers

// Function to display the questions
function displayQuestions() {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = '';
  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question-box');
    questionElement.innerHTML = `
      <div class="question">${index + 1}. ${question.question}</div>
      <ul>
        ${question.options.map((option, i) => `
          <li onclick="checkAnswer(${index}, ${i}, this)">${option}</li>
        `).join('')}
      </ul>
    `;
    questionContainer.appendChild(questionElement);
  });
}

function shuffleOptions(question) {
  let options = question.options;
  let correctAnswer = question.answer;
  
  // Shuffle the options array
  for (let i = options.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  // Update the correct answer index after shuffling
  let correctIndex = options.indexOf(correctAnswer);
  return {
    question: question.question,
    options: options,
    correctAnswer: correctAnswer,
    correctIndex: correctIndex
  };
}

// Shuffle options for all questions
const shuffledQuestions = questions.map(shuffleOptions);

// Now you can use `shuffledQuestions` with shuffled options but the correct answer will always be tracked.
console.log(shuffledQuestions);

// Function to check if the selected option is correct or wrong
function checkAnswer(questionIndex, optionIndex, element) {
  const questionElement = document.getElementsByClassName('question-box')[questionIndex];
  const listItems = questionElement.getElementsByTagName('li');
  
  // Reset all options before setting the new selected one
  Array.from(listItems).forEach((li) => {
    li.style.backgroundColor = '';  // Reset background color
    li.style.color = '';            // Reset font color
  });

  const selectedAnswer = questions[questionIndex].options[optionIndex];
  const correctAnswer = questions[questionIndex].answer;
  
  if (selectedAnswer === correctAnswer) {
    element.style.backgroundColor = 'green';
    element.style.color = 'white'; // Set font color to white for correct answer
  } else {
    element.style.backgroundColor = 'red';
    element.style.color = 'white'; // Set font color to white for incorrect answer
  }
}

// Function to show the correct answers for all questions
function showCorrectAnswers() {
  questions.forEach((question, index) => {
    const questionElement = document.getElementsByClassName('question-box')[index];
    const listItems = questionElement.getElementsByTagName('li');
    
    Array.from(listItems).forEach((li, i) => {
      if (li.textContent === question.answer) {
        li.style.backgroundColor = 'green';
        li.style.color = 'white'; // Change font color to white for correct answers
        li.setAttribute('data-correct', 'true'); // Mark it as a correct answer
      }
    });
  });
}

// Function to hide the correct answers for all questions
function hideCorrectAnswers() {
  const questionBoxes = document.getElementsByClassName('question-box');
  
  Array.from(questionBoxes).forEach((questionElement) => {
    const listItems = questionElement.getElementsByTagName('li');
    
    Array.from(listItems).forEach((li) => {
      if (li.getAttribute('data-correct') === 'true') {
        li.style.backgroundColor = ''; // Reset background color
        li.style.color = '';           // Reset font color
        li.removeAttribute('data-correct'); // Remove the correct answer marker
      }
    });
  });
}

// Function to toggle correct answers
function toggleCorrectAnswers() {
  const toggleButton = document.getElementById('toggleButton');
  
  if (showAnswers) {
    hideCorrectAnswers();
    toggleButton.textContent = "Show Correct Answers";
  } else {
    showCorrectAnswers();
    toggleButton.textContent = "Hide Correct Answers";
  }
  
  showAnswers = !showAnswers;
}

// Call the display function to show questions initially
displayQuestions();
