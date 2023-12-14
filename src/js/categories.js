import { getFilters } from '../services/api';
import {
  createCategoryCardListMarkup,
  createPaginationMarkup,
} from '../helpers/markup';

const itemsOnPage = 12;

const musclesFilterBtn = document.querySelector('button[data-muscles]');
const bodyFilterBtn = document.querySelector('button[data-body]');
const equipmentFilterBtn = document.querySelector('button[data-equipment]');
const categoryContainer = document.querySelector('#category-list-container');
const exercisesContainer = document.querySelector('#exercises-list-container');
const paginationContainer = document.querySelector('.exercises_pagination');
const topOfSectionExercises = document.querySelector('#exercises');

setFilteredCategoryList('Muscles');

function setFilteredCategoryList(filter, page = 1) {
  getFilters({ filter: filter, page: page, limit: itemsOnPage }).then(
    response => {
      categoryContainer.classList.remove('visually-hidden');
      exercisesContainer.classList.add('visually-hidden');
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
    }
  );
}

const onMusclesFilterClick = () => {
  toggleActiveStatus(musclesFilterBtn);
  setFilteredCategoryList('Muscles');
};

const onBodyFilterClick = () => {
  toggleActiveStatus(bodyFilterBtn);

  setFilteredCategoryList('Body parts');
};

const onEquipmentFilterClick = () => {
  toggleActiveStatus(equipmentFilterBtn);
  setFilteredCategoryList('Equipment');
};

musclesFilterBtn.addEventListener('click', onMusclesFilterClick);
bodyFilterBtn.addEventListener('click', onBodyFilterClick);
equipmentFilterBtn.addEventListener('click', onEquipmentFilterClick);

function toggleActiveStatus(btn) {
  const activeBtn = document.querySelector('.active');
  activeBtn.classList.remove('active');
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
  } else {
    btn.classList.add('active');
  }
}

function handlePagination() {
  let elementsArray = document.querySelectorAll('a.page-num');

  elementsArray.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      topOfSectionExercises.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      setFilteredCategoryList(e.target.dataset.filter, e.target.dataset.page);
    });
  });
}
