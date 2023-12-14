import { getExercises } from '../services/api';
import { createInfoCardMarkup } from '../helpers/markup';
import { removeFavoriteCardFromLocal } from '../helpers/functions';

const favoritesList = document.getElementById('favorite-cards-list');
const noCardsText = document.querySelector('.text-nocard-container');
const containerForList = document.querySelector('.scrollbar-container');

const handleDeleteFavoriteCard = ({ target }) => {
  if (!target.closest('#remove-favorite-btn')) return;
  const id = target.closest('[data-id="64f389465ae26083f39b17b7"]').dataset.id;
  console.log(id);
  removeFavoriteCardFromLocal(id);
};

const createListOfCards = array => {
  return array.map(item => createInfoCardMarkup(item, true)).join('');
};

const createCardsMarkupList = async list => {
  try {
    const { results } = await getExercises();
    // const results = [];

    console.log(results);

    if (results.length === 0) {
      containerForList.classList.add('hidden');
      noCardsText.classList.remove('hidden');

      return;
    }
    noCardsText.classList.add('hidden');
    containerForList.classList.remove('hidden');
    list.insertAdjacentHTML('beforeend', createListOfCards(results));
  } catch (error) {
    console.log(error.message);
  }
};

createCardsMarkupList(favoritesList);

favoritesList.addEventListener('click', handleDeleteFavoriteCard);
