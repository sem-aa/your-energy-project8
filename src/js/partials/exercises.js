import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getExercises } from '../../services/api';
import { getFromLocal } from '../../services/local-storage';
import { FILTER_EXERCISES, ITEMS_PER_PAGE } from '../../helpers/constant';
import {
  createInfoCardMarkup,
  createPaginationMarkup,
} from '../../helpers/markup';
import {
  getAllParameters,
  getValueParameterByName,
  removeAllSearchParams,
  setSearchParams,
} from './search-params';
import {
  getSortedArrayInfoCards,
  sortedSelectInstance,
} from './sorted-selected';
import { setActiveButton } from './categories';

const searchFormRef = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const titleAdditionalRef = document.querySelector('.section-title_additional');
const titleCategoryRef = document.querySelector('#title-category');
const categoryContainer = document.querySelector('#category-list-container');
const exercisesContainer = document.querySelector('#exercises-list-container');
const paginationContainer = document.querySelector('.exercises_pagination');
const topOfSectionExercises = document.querySelector('#exercises');
const sortedSelectRef = document.querySelector('#sorted-select');

const hidden = 'visually-hidden';
const hiddenExt = 'visually-hidden-ext';

let query = {};

const exercisesName = getAllParameters();
function onLoadPage() {
  if (exercisesName.equipment) {
    searchFormRef.classList.remove(hiddenExt);
    sortedSelectRef.classList.remove(hiddenExt);
    setActiveButton(FILTER_EXERCISES.equipment);
    query.filter = FILTER_EXERCISES.equipment;
    query.category = getValueParameterByName('equipment');
  }

  if (exercisesName.muscles) {
    searchFormRef.classList.remove(hiddenExt);
    sortedSelectRef.classList.remove(hiddenExt);
    setActiveButton(FILTER_EXERCISES.muscles);
    query.filter = FILTER_EXERCISES.muscles;
    query.category = getValueParameterByName('muscles');
  }

  if (exercisesName.bodyparts) {
    searchFormRef.classList.remove(hiddenExt);
    sortedSelectRef.classList.remove(hiddenExt);
    setActiveButton(FILTER_EXERCISES.body);
    query.filter = FILTER_EXERCISES.body;
    query.category = getValueParameterByName('bodyparts');
  }

  if (exercisesName.keyword) {
    searchInput.value = query.keyword = getValueParameterByName('keyword');
    const { keyword, modalOpen, ...category } = exercisesName;
    query.category = Object.values(category)[0];
    query.keywordsQuery = keyword;
  }

  renderExercises({
    filter: query.filter,
    category: query.category,
    pageNum: 1,
    keywordsQuery: query.keywordsQuery,
  });
}
onLoadPage();

searchFormRef.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();
  if (!validateSearchInput()) {
    return;
  }
  setSearchParams('keyword', searchInput.value);
  renderExercises({
    filter: query.filter,
    category: query.category,
    pageNum: 1,
    keywordsQuery: searchInput.value,
  });
}

function validateSearchInput() {
  if (searchInput.value.trim() === '') {
    iziToast.show({
      title: 'Warning',
      message: 'Please enter your search query.',
      position: 'topRight',
      color: 'yellow',
    });
    return false;
  }

  return true;
}

categoryContainer.addEventListener('click', onCategoryCardClick);

async function onCategoryCardClick(e) {
  const categoryItem = e.target.closest('.exercises_category-item');

  if (!categoryItem) {
    return;
  }

  if (!categoryItem.dataset.filter || !categoryItem.dataset.category) {
    return;
  }

  categoryContainer.classList.add(hidden);
  exercisesContainer.classList.remove(hidden);
  searchFormRef.classList.remove(hiddenExt);
  sortedSelectRef.classList.remove(hiddenExt);
  titleAdditionalRef.classList.remove(hidden);

  searchInput.value = '';

  renderExercises({
    filter: categoryItem.dataset.filter,
    category: categoryItem.dataset.category,
  });

  removeAllSearchParams();
  setSearchParams(
    `${categoryItem.dataset.filter.toLowerCase().split(' ').join('')}`,
    `${categoryItem.dataset.category}`
  );
}

async function renderExercises({
  sortType = 'default',
  filter,
  category,
  pageNum = 1,
  keywordsQuery = '',
}) {
  if (!filter || !category) {
    return;
  }

  let keywords = keywordsQuery.trim().toLowerCase();
  switch (filter) {
    case FILTER_EXERCISES.muscles:
      query = {
        muscles: category,
        category: category,
        filter: filter,
        keyword: keywords,
        limit: ITEMS_PER_PAGE.exercises,
        page: pageNum,
      };
      break;

    case FILTER_EXERCISES.equipment:
      query = {
        equipment: category,
        category: category,
        filter: filter,
        keyword: keywords,
        limit: ITEMS_PER_PAGE.exercises,
        page: pageNum,
      };
      break;

    case FILTER_EXERCISES.body:
      query = {
        bodypart: category,
        category: category,
        filter: filter,
        keyword: keywords,
        limit: ITEMS_PER_PAGE.exercises,
        page: pageNum,
      };
      break;

    default:
      break;
  }
  let arrayExercises;
  sortedSelectRef.addEventListener('change', e => {
    if (!arrayExercises) return;
    onSortedSelectChange(e, arrayExercises);
  });

  titleCategoryRef.innerHTML = category;

  const favFromLocalArr = (getFromLocal('favorites') || []).map(fav => fav._id);
  getExercises(query).then(response => {
    if (response.results.length) {
      arrayExercises = response.results;
      const sortedResults = getSortedArrayInfoCards({
        sortType: sortedSelectInstance.getSelected()[0],
        array: response.results,
      });
      exercisesContainer.innerHTML = sortedResults
        .map(result => {
          let isFavorite = false;
          if (favFromLocalArr.includes(result._id)) {
            isFavorite = true;
          }
          return createInfoCardMarkup(result, isFavorite);
        })
        .join('');
    } else {
      exercisesContainer.innerHTML = `<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>`;
    }

    if (response.totalPages > 1) {
      paginationContainer.innerHTML = createPaginationMarkup(response, filter);
      handlePagination();
    } else {
      paginationContainer.innerHTML = '';
    }
  });
}

function onSortedSelectChange(e, array) {
  const sortType = e.target.value;

  const sortedResults = getSortedArrayInfoCards({
    sortType,
    array,
  });

  const favFromLocalArr = (getFromLocal('favorites') || []).map(fav => fav._id);

  exercisesContainer.innerHTML = sortedResults
    .map(result => {
      let isFavorite = false;
      if (favFromLocalArr.includes(result._id)) {
        isFavorite = true;
      }
      return createInfoCardMarkup(result, isFavorite);
    })
    .join('');
}

function handlePagination() {
  let elementsArray = document.querySelectorAll('button.page-num');

  elementsArray.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      topOfSectionExercises.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      renderExercises({
        filter: e.target.dataset.filter,
        category: query.category,
        pageNum: e.target.dataset.page,
        keywordsQuery: query.keyword,
      });
    });
  });
}
