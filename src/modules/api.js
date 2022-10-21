import Scores from './scores.js';

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const url = `${apiURL}games/`;
const ID = 'shKHUGhdjshfKHUT7kdskfsk';
const scoreDisplay = document.querySelector('.scores_name');

const display = (gameData) => {
  scoreDisplay.innerHTML = '';
  const displayScores = gameData.map((list) => `<p>${list.user}: ${list.score} </p>`).join('');
  scoreDisplay.innerHTML = displayScores;
};

const addScore = async (user, score) => {
  const playLoadObject = new Scores(user, score);
  const response = await fetch(`${url}${ID}/scores/`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(playLoadObject) });
  const gameData = await response.json();
  return gameData;
};

const getScores = async () => {
  const response = await fetch(`${url}${ID}/scores/`);
  const gameData = await response.json();
  if (response.ok) {
    display(gameData.result);
  }
};

export { addScore, getScores, scoreDisplay };