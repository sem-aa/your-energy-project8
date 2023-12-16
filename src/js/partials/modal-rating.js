import { updateRaring } from '../../services/api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRating = document.querySelector('#ratingForm');
const btnCloseModal = document.querySelector('.close-rating');
const ratingModal = document.querySelector('#ratingModal');

export async function handleSubmit(event) {
  event.preventDefault();
  const btnRating = document.querySelector('.modal-exercises__button-rating');
  const id = btnRating.getAttribute('data-value');
  const formData = new FormData(formRating);

  const jsonData = {};
  formData.forEach((value, key) => {
    if (key === 'rate') {
      jsonData[key] = Number(value);
    } else jsonData[key] = value;
  });
  try {
    const res = await updateRaring(id, jsonData);
    if (res) {
      iziToast.success({
        title: 'OK',
        message: 'Successfully sent rating!',
      });
      closeRatingWindow();
    } else {
      iziToast.error({
        title: 'Error',
        message: 'There was an error',
      });
    }
    event.target.reset();
  } catch (error) {}
}

formRating.addEventListener('submit', handleSubmit);

btnCloseModal.addEventListener('click', closeRatingWindow);

function closeRatingWindow() {
  const modalExercises = document.querySelector('.modal-exercises');
  modalExercises.classList.remove('visually-hidden');
  ratingModal.style.display = 'none';
}
