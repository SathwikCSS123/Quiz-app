const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
        bgColorClass: 'question-bg-1',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
        bgColorClass: 'question-bg-2',
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale',
        bgColorClass: 'question-bg-3',
    },
    {
        question: 'What is the capital of Japan?',
        options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
        correctAnswer: 'Tokyo',
        bgColorClass: 'question-bg-4',
    },
    {
        question: 'Which element has the chemical symbol "O"?',
        options: ['Oxygen', 'Gold', 'Silver', 'Iron'],
        correctAnswer: 'Oxygen',
        bgColorClass: 'question-bg-5',
    },
];

let currentQuestionIndex = 0;
let userScore = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsHtml = currentQuestion.options.map(option => `<button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>`).join('');

    questionContainer.innerHTML = `
        <div class="question-bg ${currentQuestion.bgColorClass}">
            <h2>${currentQuestion.question}</h2>
            ${optionsHtml}
        </div>
    `;
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        userScore++;
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.innerHTML = '';
    nextButton.style.display = 'none';

    resultContainer.innerHTML = `
        <h2>Your Score: ${userScore} out of ${questions.length}</h2>
        <button class="retry-btn" onclick="resetQuiz()">Try Again</button>
    `;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    nextButton.style.display = 'block';
    resultContainer.innerHTML = '';
    displayQuestion();
}

// Display the first question on page load
displayQuestion();
