export const score = document.querySelector('.score');
export const namVal = document.querySelector('.name');
export const scoresName = document.querySelector('.scores_name');
export const refresh = document.querySelector('.refresh');

export const addNameScroe = () => {
  const nameAndScore = document.createElement('p');

  if (namVal.value === 0 || score.value === 0) {
    alert('Put in a name and score');
    return false;
  }
  nameAndScore.innerText = `${namVal.value}:  ${score.value}`;
  scoresName.append(nameAndScore);

  return true;
};