let startTime;
let isStarted = false;

// Create unlimited "ASDF ;LKJ" words
const lessonText = Array(1000).fill('ASDF ;LKJ').join(' ').split(' ');  // Generating a lot of "ASDF ;LKJ" for practice

document.getElementById('lesson-text').innerHTML = lessonText.join(' ');

function startTyping() {
    if (!isStarted) {
        startTime = new Date();
        isStarted = true;
    }
    compareText();
}

function compareText() {
    const typedText = document.getElementById('typing-area').value.split(' ');
    let coloredText = '';
    let activeWordIndex = typedText.length - 1;

    for (let i = 0; i < lessonText.length; i++) {
        if (i === activeWordIndex) {
            coloredText += `<span class="active">${lessonText[i]}</span> `;
        } else if (typedText[i] === lessonText[i]) {
            coloredText += `<span class="correct">${lessonText[i]}</span> `;
        } else if (typedText[i] !== lessonText[i] && typedText[i] !== undefined) {
            coloredText += `<span class="incorrect">${lessonText[i]}</span> `;
        } else {
            coloredText += `${lessonText[i]} `;
        }
    }

    document.getElementById('lesson-text').innerHTML = coloredText;

    // Automatically scroll the lesson text to the bottom
    const lessonTextElement = document.getElementById('lesson-text');
    lessonTextElement.scrollTop = lessonTextElement.scrollHeight;
}

function finishLesson() {
    const typedText = document.getElementById('typing-area').value.split(' ');

    const totalTime = (new Date() - startTime) / 1000 / 60;  // time in minutes
    const wordCount = typedText.length;
    const wpm = (typedText.length / totalTime).toFixed(2);  // words per minute

    let mistakes = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] !== lessonText[i]) {
            mistakes++;
        }
    }

    const accuracy = (((typedText.length - mistakes) / typedText.length) * 100).toFixed(2);

    document.getElementById('result').innerHTML = `
        <p>Words Per Minute (WPM): ${wpm}</p>
        <p>Mistakes: ${mistakes}</p>
        <p>Accuracy: ${accuracy}%</p>
    `;

    // Scroll to the top of the page after finishing the test
    window.scrollTo(0, 0);
}
