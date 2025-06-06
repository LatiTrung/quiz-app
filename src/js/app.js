import questions from './questions.js';

let currentQuestionIndex = 0;
let totalScore = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultsDiv = document.getElementById("results");
const scoreElement = document.getElementById("score");
const interpretationElement = document.getElementById("interpretation");
const prevButton = document.getElementById("prev-button");
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz");
const startQuizButton = document.getElementById("start-quiz-btn");
const loadingScreen = document.getElementById("loading-screen");

let userAnswers = new Array(questions.length).fill(null);
let participantName = '';

document.addEventListener('DOMContentLoaded', () => {
    // Hide quiz and results screens initially
    quizScreen.style.display = 'none';
    resultsDiv.style.display = 'none';
    
    // Show welcome screen
    welcomeScreen.style.display = 'block';
});


function startQuiz() {
    const nameInput = document.getElementById('participant-name');
    const nameError = document.getElementById('name-error');
    
    if (!nameInput.value.trim()) {
        nameError.style.display = 'block';
        nameInput.focus();
        return;
    }
    
    participantName = nameInput.value.trim();
    nameError.style.display = 'none';
    welcomeScreen.style.display = "none";
    quizScreen.style.display = "block";
    currentQuestionIndex = 0;
    totalScore = 0;
    userAnswers = new Array(questions.length).fill(null);
    showQuestion();
}

startQuizButton.addEventListener("click", startQuiz);

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.dataset.value = answer.value;
        button.addEventListener("click", selectAnswer);
        
        if (userAnswers[currentQuestionIndex] === answer.value) {
            button.classList.add('selected');
        }
        
        answerButtons.appendChild(button);
    });
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    prevButton.classList.toggle('disabled', currentQuestionIndex === 0);
    nextButton.classList.toggle('disabled', !userAnswers[currentQuestionIndex]);
    
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Xem kết quả";
    } else {
        nextButton.textContent = "Câu tiếp theo";
    }
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const allButtons = Array.from(answerButtons.children);
    
    if (selectedButton.classList.contains('selected')) {
        selectedButton.classList.remove('selected');
        userAnswers[currentQuestionIndex] = null;
    } else {
        allButtons.forEach(button => button.classList.remove('selected'));
        selectedButton.classList.add('selected');
        userAnswers[currentQuestionIndex] = parseInt(selectedButton.dataset.value);
    }
    
    updateNavigationButtons();
}

function showResults() {
    const quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    loadingScreen.style.display = "block";

    // Calculate total score
    const totalScore = userAnswers.reduce((sum, value) => sum + (value || 0), 0);

    setTimeout(() => {
        loadingScreen.style.display = "none";
        resultsDiv.style.display = "block";

        // Remove any existing result classes
        resultsDiv.classList.remove('result-genx', 'result-neutral', 'result-genz');
        document.body.classList.remove('result-genx-bg', 'result-neutral-bg', 'result-genz-bg');
        
        // Clear any existing background classes from quiz container
        document.querySelector('.quiz-container').style.background = 'rgba(255, 255, 255, 0.85)';

        let interpretation = "";
        if (totalScore >= 46) {
            interpretation = `${participantName}, bạn có xu hướng yêu truyền thống (Gen X):\nBạn đề cao sự ổn định, kín đáo, thấu cảm và gắn bó bền lâu.`;
            resultsDiv.classList.add('result-genx');
            document.body.classList.add('result-genx-bg');
        } else if (totalScore >= 30) {
            interpretation = `${participantName}, bạn có xu hướng yêu giao thoa (Trung lập):\nBạn biết cân bằng giữa sự riêng tư và cởi mở.`;
            resultsDiv.classList.add('result-neutral');
            document.body.classList.add('result-neutral-bg');
        } else {
            interpretation = `${participantName}, bạn có xu hướng yêu hiện đại (Gen Z):\nBạn có xu hướng thoải mái, cởi mở và linh hoạt trong tình yêu.`;
            resultsDiv.classList.add('result-genz');
            document.body.classList.add('result-genz-bg');
        }

        document.getElementById('interpretation').textContent = interpretation;
    }, 3000);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
});

prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

document.getElementById('restart-btn').addEventListener('click', () => {
    // Reset quiz state
    currentQuestionIndex = 0;
    totalScore = 0;
    userAnswers = new Array(questions.length).fill(null);
    participantName = '';
    
    // Reset background and ensure container transparency
    document.body.classList.remove('result-genx-bg', 'result-neutral-bg', 'result-genz-bg');
    document.querySelector('.quiz-container').style.background = 'none';
    document.querySelector('.quiz-container').style.backdropFilter = 'none';
    document.querySelector('.quiz-container').style.boxShadow = 'none';
    
    // Hide results and show welcome screen
    document.getElementById('results').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    
    // Clear name input
    document.getElementById('participant-name').value = '';
});