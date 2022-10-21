import { refresh, scoresName } from './newScore.js';

const refreshPage = () => {
  refresh.addEventListener('click', () => {
    scoresName.innerHTML = '';
  });
};

export default refreshPage;