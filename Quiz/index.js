{
  const mainContainer = document.getElementById('quiz-container');
  const questionContainer = document.createElement('article');

  questionContainer.innerHTML = `
    <div>This is a question</div>
  `;

  mainContainer.appendChild(questionContainer);
}