import {
  getFromLocal,
  removeFavoriteCardFromLocal,
  saveToLocal,
} from '../services/local-storage';
import { getExercises } from '../services/api';
import { createInfoCardMarkup } from '../helpres/markup';

const favoritesList = document.getElementById('favorite-cards-list');

console.log(favoritesList);
await getExercises().then(data => {
  console.log(data.results[0]);
  const test = createInfoCardMarkup(data.results[0]);
  favoritesList.insertAdjacentHTML('beforeend', test);
});

const handleDeleteFavoriteCard = ({ target }) => {
  if (!target.closest('#remove-favorite-btn')) return;
  const id = target.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;
  console.log(id);
  removeFavoriteCardFromLocal(id);
};

favoritesList.addEventListener('click', handleDeleteFavoriteCard);
