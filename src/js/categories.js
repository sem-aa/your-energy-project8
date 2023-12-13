import { getFilters } from '../services/api';

const musclesFilterBtn = document.querySelector('button[data-muscles]');
const bodyFilterBtn = document.querySelector('button[data-body]');
const equipmentFilterBtn = document.querySelector('button[data-equipment]');
const exCategoryContainer = document.querySelector('.exercises_category-list');

getFilters({ filter: 'Muscles', page: 1, limit: 12 }).then(response => {
  exCategoryContainer.innerHTML = renderCategoryCardListMarkup(response);
});

const onMusclesFilterClick = () => {
  toggleActiveStatus(musclesFilterBtn);
  try {
    getFilters({ filter: 'Muscles', page: 1, limit: 12 }).then(response => {
      console.log('response', response.results);
      exCategoryContainer.innerHTML = renderCategoryCardListMarkup(response);
    });
  } catch (error) {}
};

const onBodyFilterClick = () => {
  toggleActiveStatus(bodyFilterBtn);

  getFilters({ filter: 'Body parts', page: 1, limit: 12 }).then(response => {
    exCategoryContainer.innerHTML = renderCategoryCardListMarkup(response);
  });
};

const onEquipmentFilterClick = () => {
  toggleActiveStatus(equipmentFilterBtn);

  getFilters({ filter: 'Equipment', page: 1, limit: 12 }).then(response => {
    exCategoryContainer.innerHTML = renderCategoryCardListMarkup(response);
  });
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

function renderCategoryCardListMarkup(data) {
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
