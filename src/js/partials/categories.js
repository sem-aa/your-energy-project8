import { getFilters } from '../../services/api';
import {
  createCategoryCardListMarkup,
  createPaginationMarkup,
} from '../../helpers/markup';
import { FILTER_EXERCISES, ITEMS_PER_PAGE } from '../../helpers/constant';
import {
  getAllParameters,
  getValueParameterByName,
  removeAllSearchParams,
  setSearchParams,
} from './search-params';
import { sortedSelectInstance } from './sorted-selected';

const inputRef = document.querySelector('.search-box');
const titleAdditionalRef = document.querySelector('.section-title_additional');
const musclesFilterBtn = document.querySelector('button[data-muscles]');
const bodyFilterBtn = document.querySelector('button[data-body]');
const equipmentFilterBtn = document.querySelector('button[data-equipment]');
const categoryContainer = document.querySelector('#category-list-container');
const exercisesContainer = document.querySelector('#exercises-list-container');
const paginationContainer = document.querySelector('.exercises_pagination');
const topOfSectionExercises = document.querySelector('#exercises');
const sortedSelectRef = document.querySelector('#sorted-select');

const allParams = getAllParameters();
let filterName;
if (!Object.keys(allParams).length) {
  filterName = FILTER_EXERCISES.muscles;
  setSearchParams('filter', FILTER_EXERCISES.muscles);
}

filterName = getValueParameterByName('filter');

export function setActiveButton(filterName) {
  switch (filterName) {
    case FILTER_EXERCISES.muscles:
      toggleActiveStatus(musclesFilterBtn);
      break;
    case FILTER_EXERCISES.body:
      toggleActiveStatus(bodyFilterBtn);
      break;
    case FILTER_EXERCISES.equipment:
      toggleActiveStatus(equipmentFilterBtn);
      break;

    default:
      toggleActiveStatus(musclesFilterBtn);
      break;
  }
}
setActiveButton(filterName);

if (filterName) setFilteredCategoryList(filterName);

function setFilteredCategoryList(filter, page = 1) {
  getFilters({
    filter: filter,
    page: page,
    limit: ITEMS_PER_PAGE.equipmcategoriesent,
  }).then(response => {
    categoryContainer?.classList?.remove('visually-hidden');
    exercisesContainer?.classList?.add('visually-hidden');
    inputRef?.classList?.add('visually-hidden-ext');
    titleAdditionalRef?.classList?.add('visually-hidden');
    sortedSelectInstance.setSelected('default');
    sortedSelectRef.classList.add('visually-hidden-ext');

    if (response.results.length) {
      categoryContainer.innerHTML = createCategoryCardListMarkup(response);

      if (response.totalPages > 1) {
        paginationContainer.innerHTML = createPaginationMarkup(
          response,
          filter
        );
        handlePagination();
      } else {
        paginationContainer.innerHTML = '';
      }
    } else {
      categoryContainer.innerHTML = `<li class="sorry-message"><p>Sorry, there are no exercises by your request.</p></li>`;
    }
  });
}

const onMusclesFilterClick = () => {
  removeAllSearchParams();
  setSearchParams('filter', FILTER_EXERCISES.muscles);

  toggleActiveStatus(musclesFilterBtn);
  setFilteredCategoryList(FILTER_EXERCISES.muscles);
};

const onBodyFilterClick = () => {
  removeAllSearchParams();
  setSearchParams('filter', FILTER_EXERCISES.body);
  toggleActiveStatus(bodyFilterBtn);

  setFilteredCategoryList(FILTER_EXERCISES.body);
};

const onEquipmentFilterClick = () => {
  removeAllSearchParams();
  setSearchParams('filter', FILTER_EXERCISES.equipment);
  toggleActiveStatus(equipmentFilterBtn);
  setFilteredCategoryList(FILTER_EXERCISES.equipment);
};

musclesFilterBtn?.addEventListener('click', onMusclesFilterClick);
bodyFilterBtn?.addEventListener('click', onBodyFilterClick);
equipmentFilterBtn?.addEventListener('click', onEquipmentFilterClick);

export function toggleActiveStatus(filterBtn) {
  const activeBtn = document.querySelectorAll('.active');

  if (activeBtn.length) {
    activeBtn.forEach(btn => {
      btn.classList.remove('active');
    });
  }

  filterBtn.classList.add('active');
}

function handlePagination() {
  let elementsArray = document.querySelectorAll('button.page-num');

  elementsArray.forEach(function (elem) {
    elem?.addEventListener('click', function (e) {
      topOfSectionExercises?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      setFilteredCategoryList(e.target.dataset.filter, e.target.dataset.page);
    });
  });
}
