export const score = document.querySelector('.score');
export const namVal = document.querySelector('.name');

const clearInput = () => {
  namVal.value = '';
  score.value = '';
};

export default clearInput;