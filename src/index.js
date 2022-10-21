import './style.css';
import clearInput, { score, namVal } from './modules/clearInput.js';
import { getScores, addScore, scoreDisplay } from './modules/api.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const scores = score.value;
  const nameVal = namVal.value;
  scoreDisplay.innerHTML += `<p>${nameVal}: ${scores} </p>`;
  addScore(nameVal, scores);
  clearInput();
});

refresh.addEventListener('click', () => {
  getScores();
});