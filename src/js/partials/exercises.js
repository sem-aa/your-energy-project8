import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getExercises } from '../../services/api';
import { getFromLocal } from '../../services/local-storage';
//import { showLoader, hideLoader } from './loader';
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

const itemsOnPage = 10;

let query = {};

const exercisesName = getAllParameters();
function onLoadPage() {
  if (exercisesName.equipment) {
    searchFormRef.classList.remove('visually-hidden-ext');
    sortedSelectRef.classList.remove('visually-hidden-ext');
    setActiveButton('Equipment');
    query.filter = 'Equipment';
    query.category = getValueParameterByName('equipment');
  }

  if (exercisesName.muscles) {
    searchFormRef.classList.remove('visually-hidden-ext');
    sortedSelectRef.classList.remove('visually-hidden-ext');
    setActiveButton('Muscles');
    query.filter = 'Muscles';
    query.category = getValueParameterByName('muscles');
  }

  if (exercisesName.bodyparts) {
    searchFormRef.classList.remove('visually-hidden-ext');
    sortedSelectRef.classList.remove('visually-hidden-ext');
    setActiveButton('Body parts');
    query.filter = 'Body parts';
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

  categoryContainer.classList.add('visually-hidden');
  exercisesContainer.classList.remove('visually-hidden');
  searchFormRef.classList.remove('visually-hidden-ext');
  sortedSelectRef.classList.remove('visually-hidden-ext');
  titleAdditionalRef.classList.remove('visually-hidden');

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
    case 'Muscles':
      query = {
        muscles: category,
        category: category,
        filter: filter,
        keyword: keywords,
        limit: itemsOnPage,
        page: pageNum,
      };
      break;

    case 'Equipment':
      query = {
        equipment: category,
        category: category,
        filter: filter,
        keyword: keywords,
        limit: itemsOnPage,
        page: pageNum,
      };
      break;

    case 'Body parts':
      query = {
        bodypart: category,
        category: category,
        filter: filter,
        keyword: keywords,
        limit: itemsOnPage,
        page: pageNum,
      };
      break;

    default:
      break;
  }
  let arrayExercises;
  sortedSelectRef.addEventListener('change', e =>
    onSortedSelectChange(e, arrayExercises)
  );

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
    .join(''); //
}

function handlePagination() {
  let elementsArray = document.querySelectorAll('a.page-num');

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
