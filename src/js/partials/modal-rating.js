import { updateRaring } from '../../services/api';

const formRating = document.querySelector('#ratingForm');
const btnCloseModal = document.querySelector('.close-rating');
const btnOpenModal = document.querySelector('.modal-exercises__button-rating');
const ratingModal = document.querySelector('#ratingModal');
console.log(btnOpenModal);
const idExercises = '64f389465ae26083f39b17a4';

async function sendRating(event) {
  event.preventDefault();

  const formData = new FormData(formRating);

  const jsonData = {};
  formData.forEach((value, key) => {
    if (key === 'rate') {
      jsonData[key] = Number(value);
    } else jsonData[key] = value;
  });

  try {
    const res = await updateRaring(idExercises, jsonData);
    console.log(res);
    if (!res) {
      alert('Error');
    }
  } catch (error) {
    console.log('shpm');
    console.log(error.message);
  }
}

formRating.addEventListener('submit', sendRating);

btnOpenModal?.addEventListener('click', function () {
  ratingModal.style.display = 'block';
  body.classList.add('modal-open');
});

btnCloseModal.addEventListener('click', () => {
  ratingModal.style.display = 'none';
  // body.classList.remove('modal-open');
});
