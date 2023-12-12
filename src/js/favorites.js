import { getFromLocal } from '../services/local-storage';
import { getExercises } from '../services/api';
import { createInfoCardMarkup } from '../helpres/markup';

const list = document.querySelector('.favorite-cards-thumb');

console.log(list);
getExercises().then(data => {
  console.log(data.results[0]);
  const test = createInfoCardMarkup(data.results[0]);
  list.insertAdjacentHTML('beforebegin', test);
});
// export const favoriteCardsFromLS = getFromLocal();
