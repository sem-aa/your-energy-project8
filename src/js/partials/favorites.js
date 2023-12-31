import { getFromLocal } from '../../services/local-storage';
import { createInfoCardMarkup } from '../../helpers/markup';
import { removeFavoriteCardFromLocal } from '../../helpers/functions';
import { onExerciseListClick } from './modal';

const favoritesList = document.getElementById('favorite-cards-list');
const paginationContainer = document.getElementById('pagination-container');
const quoteContainer = document.querySelector('.quote-container');

let currentPage = 1;
let itemsPerPage = window.innerWidth < 768 ? 8 : 10;
const checkLocation = window.location.href
  .split('/')
  .includes('favorites.html');

const handleDeleteFavoriteCard = ({ target }) => {
  if (!target.closest('[data-remove]')) return;
  const id = target.closest('[data-id]').dataset.id;
  removeFavoriteCardFromLocal(id);
  createCardsMarkupList(favoritesList);
};

function reloadOnWidthChange() {
  let initialWidth = window.innerWidth;

  function handleResize() {
    let currentWidth = window.innerWidth;

    if (currentWidth !== initialWidth) {
      window.location.reload();
      initialWidth = currentWidth;
    }
  }

  window.addEventListener('resize', handleResize);
}

const createListOfCards = (array, page = 1) => {
  if (window.innerWidth < 1440) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return array
      .slice(start, end)
      .map(item => createInfoCardMarkup(item, true))
      .join('');
  }
  return array.map(item => createInfoCardMarkup(item, true)).join('');
};

export const createShortStringFavorites = (string = '') => {
  if (string.length > 4 && window.innerWidth < 1440) {
    return `${string.slice(0, 4)} ...`;
  }
  return string;
};

export const createShortTitle = (title = '') => {
  const arrayOfWords = title.split(' ');

  if (title !== '' && arrayOfWords.length > 3) {
    return arrayOfWords.splice(0, 3).join(' ') + ' ...';
  }
  return title;
};

export function createCardsMarkupList(list) {
  const containerForList = document.querySelector('.scrollbar-container');
  const noCardsText = document.querySelector('.text-nocard-container');
  try {
    const results = getFromLocal('favorites');

    if (!results || results.length === 0) {
      containerForList?.classList.add('hidden');
      noCardsText?.classList.remove('hidden');

      return;
    }

    noCardsText?.classList.add('hidden');
    containerForList?.classList.remove('hidden');

    if (list) {
      list.innerHTML = createListOfCards(results, currentPage);
    }

    if (window.innerWidth < 1440) {
      createPaginationMarkup(results.length);
    }

    if (checkLocation && window.innerWidth >= 1440) {
      quoteContainer.style.maxWidth = '494px';
    }
  } catch (error) {
    console.log(error.message);
  }
}

const createPaginationMarkup = cards => {
  const pageCount = Math.ceil(cards / itemsPerPage);
  let pagesMarkup = '';

  if (
    getFromLocal('favorites').length > 10 ||
    (getFromLocal('favorites').length > 8 && window.innerWidth < 768)
  )
    for (let i = 1; i <= pageCount; i++) {
      pagesMarkup += `<li class="pagination-item ${
        i === currentPage ? 'current' : ''
      }">
                      <a href="#" class="page-number" data-page="${i}">${i}</a>
                    </li>`;
    }

  if (paginationContainer) {
    paginationContainer.innerHTML = pagesMarkup;
  }
};

const handlePagination = event => {
  if (event.target.classList.contains('page-number')) {
    event.preventDefault();
    currentPage = parseInt(event.target.dataset.page, 10);

    createCardsMarkupList(favoritesList);
  }
  if (favoritesList) {
    favoritesList.scrollTop = 0;
    favoritesList.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
};

if (paginationContainer) {
  paginationContainer.addEventListener('click', handlePagination);
}

createCardsMarkupList(favoritesList);

if (favoritesList) {
  favoritesList.addEventListener('click', onExerciseListClick);

  favoritesList.addEventListener('click', handleDeleteFavoriteCard);
}

reloadOnWidthChange();
