import { getExercises } from '../services/api';
import { createInfoCardMarkup } from '../helpers/markup'; //   createInfoCardListMarkup,

const categoryContainer = document.querySelector('#category-list-container');
const exercisesContainer = document.querySelector('#exercises-list-container');
categoryContainer.addEventListener('click', onCategoryCardClick);

async function onCategoryCardClick(e) {
  console.log('e', e);
  const categoryItem = e.target.closest('.exercises_category-item');

  if (!categoryItem) {
    return;
  }

  if (!categoryItem.dataset.filter || !categoryItem.dataset.category) {
    return;
  }

  categoryContainer.classList.add('visually-hidden');
  exercisesContainer.classList.remove('visually-hidden');

  let query = {};
  switch (categoryItem.dataset.filter) {
    case 'Muscles':
      query = { muscles: categoryItem.dataset.category };
      break;

    case 'Equipment':
      query = { equipment: categoryItem.dataset.category };
      break;

    case 'Body parts':
      query = { bodypart: categoryItem.dataset.category };
      break;

    default:
      break;
  }

  getExercises(query).then(response => {
    console.log('response', response);
    exercisesContainer.innerHTML = response.results
      .map(result => {
        return createInfoCardMarkup(result);
      })
      .join('');
  });
}
