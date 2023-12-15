import { updateRaring } from '../../services/api';

const formRating = document.querySelector('#ratingForm');
const btnCloseModal = document.querySelector('.close-rating');
const btnOpenModal = document.querySelector('.modal-exercises__button-rating');
const ratingModal = document.querySelector('#ratingModal');

const idExercises = '64f389465ae26083f39b17a4';

function sendRating(event) {
  event.preventDefault();

  const formData = new FormData(formRating);

  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  console.log(jsonData);
  updateRaring(idExercises, jsonData);
}

formRating.addEventListener('submit', sendRating);

btnOpenModal.addEventListener('click', function () {
  ratingModal.style.display = 'block';
  body.classList.add('modal-open');
});

btnCloseModal.addEventListener('click', () => {
  ratingModal.style.display = 'none';
  body.classList.remove('modal-open');
});
