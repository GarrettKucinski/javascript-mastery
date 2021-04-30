{

  function createAndAppendQuestion ({ question, possibleAnsers = [] }) {
    const mainContainer = document.getElementById('quiz-container');
    const questionContainer = document.createElement('article');

    questionContainer.innerHTML = `
      <div>${question}</div>
      <ul>
        ${possibleAnsers.map(answer => `<li>${answer}<li>`).join('')}
      </ul>
    `;

    mainContainer.appendChild(questionContainer);
  }

  const baseURL = 'https://api.sampleapis.com/avatar/questions';
  fetch(baseURL)
    .then(resp => resp.json())
    .then(data => data.forEach(createAndAppendQuestion));
}