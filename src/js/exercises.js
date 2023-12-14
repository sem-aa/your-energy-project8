import { getExercises } from '../services/api';
import {
  createInfoCardMarkup,
  createPaginationMarkup,
} from '../helpers/markup';

const categoryContainer = document.querySelector('#category-list-container');
const exercisesContainer = document.querySelector('#exercises-list-container');
const paginationContainer = document.querySelector('.exercises_pagination');

const itemsOnPage = 10;

let query = {};

categoryContainer.addEventListener('click', onCategoryCardClick);

async function onCategoryCardClick(e) {
  const categoryItem = e.target.closest('.exercises_category-item');

  if (!categoryItem) {
    return;
  }

  if (!categoryItem.dataset.filter || !categoryItem.dataset.category) {
    return;
  }

  categoryContainer.classList.add('visually-hidden');
  exercisesContainer.classList.remove('visually-hidden');

  renderExercises(categoryItem.dataset.filter, categoryItem.dataset.category);
}

async function renderExercises(filter, category, pageNum = 1) {
  switch (filter) {
    case 'Muscles':
      query = {
        muscles: category,
        category: category,
        limit: itemsOnPage,
        page: pageNum,
      };
      break;

    case 'Equipment':
      query = {
        equipment: category,
        category: category,
        limit: itemsOnPage,
        page: pageNum,
      };
      break;

    case 'Body parts':
      query = {
        bodypart: category,
        category: category,
        limit: itemsOnPage,
        page: pageNum,
      };
      break;

    default:
      break;
  }

  getExercises(query).then(response => {
    exercisesContainer.innerHTML = response.results
      .map(result => {
        return createInfoCardMarkup(result);
      })
      .join('');

    if (response.totalPages > 1) {
      paginationContainer.innerHTML = createPaginationMarkup(response, filter);
      handlePagination();
    } else {
      paginationContainer.innerHTML = '';
    }
  });
}

function handlePagination() {
  let elementsArray = document.querySelectorAll('a.page-num');

  elementsArray.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderExercises(
        e.target.dataset.filter,
        query.category,
        e.target.dataset.page
      );
    });
  });
}
