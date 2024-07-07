// Questions and answers stored in an object
const quizData = {
    q1: 'a',
};

// Function to evaluate answers and calculate score
function submitQuiz(){
    let score = 0;
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
    };
    for (let question in quizData) {
        if (quizData.hasOwnProperty(question)) {
            if (quizData[question] === userAnswers[question]) {
                score ++;
            }
        }
    }
    document.getElementById('score').innerHTML = 'Score: ' + score;
}