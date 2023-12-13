import { getFilters } from '../services/api';

const itemsOnPage = 12;

const musclesFilterBtn = document.querySelector('button[data-muscles]');
const bodyFilterBtn = document.querySelector('button[data-body]');
const equipmentFilterBtn = document.querySelector('button[data-equipment]');
const exCategoryContainer = document.querySelector('.exercises_category-list');
const paginationContainer = document.querySelector('.exercises_pagination');

setFilteredCategoryList('Muscles');

function setFilteredCategoryList(filter, page = 1) {
  getFilters({ filter: filter, page: page, limit: itemsOnPage }).then(
    response => {
      console.log('response', response);
      exCategoryContainer.innerHTML = createCategoryCardListMarkup(response);
      paginationContainer.innerHTML = createPaginationMarkup(response, filter);

      handlePagination();
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

function createCategoryCardListMarkup(data) {
  return data.results
    .map(({ imgURL, name, filter }) => {
      return `            
        <li class="exercises_category-item"
        style="
          background-image: linear-gradient(
              0deg,
              rgba(17, 17, 17, 0.5) 0%,
              rgba(17, 17, 17, 0.5) 100%
            ),
            url(${imgURL});
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: cover;
        "
        >
            <div class="exercises_category-descr">
                <h3 class="exercises_category-title">${name}</h3>
                <p class="exercises_category-text">${filter}</p>   
            </div>
      </li>`;
    })
    .join('');
}

function createPaginationMarkup(data, filter) {
  let pagesArray = [];

  for (let page = 1; page <= data.totalPages; page++) {
    let current = page.toString() === data.page ? 'current' : '';

    pagesArray.push(` <li class="exercises_pagination-item ${current}">
        <a class="page-num" data-page="${page}" data-filter="${filter}">${page}</a>
      </li>`);
  }

  return pagesArray.join('');
}

function handlePagination() {
  let elementsArray = document.querySelectorAll('a.page-num');

  elementsArray.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      console.log('test', e.target.dataset);
      setFilteredCategoryList(e.target.dataset.filter, e.target.dataset.page);
    });
  });
}
