// État de l'application
let answers = {};
let submitted = false;

// Éléments du DOM
const questionsContainer = document.getElementById('questions-container');
const scoreDisplay = document.getElementById('score-display');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialisation
function init() {
    renderQuestions();
    updateSubmitButton();
    
    submitBtn.addEventListener('click', handleSubmit);
    resetBtn.addEventListener('click', handleReset);
}

// Rendu des questions
function renderQuestions() {
    questionsContainer.innerHTML = questions.map((q, index) => `
        <div class="question-block">
            <h3 class="question-title">${index + 1}. ${q.question}</h3>
            <div class="options-container">
                ${q.options.map((option, optIndex) => `
                    <label class="option-label" data-question="${q.id}" data-option="${optIndex}">
                        <input 
                            type="radio" 
                            name="question-${q.id}" 
                            value="${optIndex}"
                            ${submitted ? 'disabled' : ''}
                        >
                        <span class="option-text">${option}</span>
                        <span class="option-icon"></span>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Ajouter les écouteurs d'événements
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', handleAnswerChange);
    });
}

// Gestion du changement de réponse
function handleAnswerChange(e) {
    const questionId = parseInt(e.target.name.split('-')[1]);
    const optionIndex = parseInt(e.target.value);
    
    answers[questionId] = optionIndex;
    updateOptionStyles(questionId, optionIndex);
    updateSubmitButton();
}

// Mise à jour des styles d'options
function updateOptionStyles(questionId, selectedIndex) {
    const labels = document.querySelectorAll(`label[data-question="${questionId}"]`);
    
    labels.forEach((label, index) => {
        label.classList.remove('selected');
        if (index === selectedIndex) {
            label.classList.add('selected');
        }
    });
}

// Mise à jour du bouton soumettre
function updateSubmitButton() {
    submitBtn.disabled = Object.keys(answers).length !== questions.length;
}

// Soumission du formulaire
function handleSubmit() {
    submitted = true;
    let score = 0;
    
    // Calculer le score
    questions.forEach(q => {
        if (answers[q.id] === q.correct) {
            score++;
        }
    });
    
    // Afficher les résultats
    displayResults(score);
    
    // Mettre à jour l'affichage des options
    questions.forEach(q => {
        updateOptionsAfterSubmit(q);
    });
    
    // Désactiver les inputs et mettre à jour l'interface
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
    });
    
    document.querySelectorAll('.option-label').forEach(label => {
        label.classList.add('disabled');
    });
    
    submitBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Affichage des résultats
function displayResults(score) {
    const percentage = Math.round((score / questions.length) * 100);
    const isSuccess = score >= questions.length * 0.7;
    
    scoreDisplay.innerHTML = `Score : ${score} / ${questions.length} (${percentage}%)`;
    scoreDisplay.className = `score-display ${isSuccess ? 'success' : 'warning'}`;
    scoreDisplay.classList.remove('hidden');
}

// Mise à jour des options après soumission
function updateOptionsAfterSubmit(question) {
    const labels = document.querySelectorAll(`label[data-question="${question.id}"]`);
    
    labels.forEach((label, optIndex) => {
        const icon = label.querySelector('.option-icon');
        const isSelected = answers[question.id] === optIndex;
        const isCorrect = optIndex === question.correct;
        
        label.classList.remove('selected');
        
        if (isCorrect) {
            label.classList.add('correct');
            icon.textContent = '✓';
            icon.classList.add('correct');
        } else if (isSelected && !isCorrect) {
            label.classList.add('incorrect');
            icon.textContent = '✗';
            icon.classList.add('incorrect');
        }
    });
}

// Réinitialisation
function handleReset() {
    submitted = false;
    answers = {};
    
    scoreDisplay.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    resetBtn.classList.add('hidden');
    
    renderQuestions();
    updateSubmitButton();
}

// Démarrage de l'application
init();