import { updateRaring } from '../../services/api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRating = document.querySelector('#ratingForm');
const btnCloseModal = document.querySelector('.close-rating');

const btnOpenModalRating = document.querySelector(
  '.modal-exercises__button-rating'
);
const modalExercises = document.querySelector('.modal-exercises');

const ratingModal = document.querySelector('#ratingModal');

let idExercises = '64f389465ae26083f39b17a4';
// Open modal window
// btnOpenModalRating.addEventListener('click', () => {
//   modalExercises.style.display = 'none';

//   console.log('Click in button open rating window');
// });

// Open modal window end

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
    if (res) {
      iziToast.success({
        title: 'OK',
        message: 'Successfully sent rating!',
      });
    } else {
      iziToast.error({
        title: 'Error',
        message: 'There was an error',
      });
    }
  } catch (error) {
    // console.log('shpm');
    // console.log(error.message);
  }
}

formRating.addEventListener('submit', sendRating);

// btnOpenModal?.addEventListener('click', function () {
//   ratingModal.style.display = 'block';
//   body.classList.add('modal-open');
// });

// btnCloseModal.addEventListener('click', () => {
//   ratingModal.style.display = 'none';
//   // body.classList.remove('modal-open');
// });

btnCloseModal.addEventListener('click', event => {
  if (event.target.closest('.modal-exercises__button-favourites')) {
    console.log('Button clicked!');

    // handleClickFavoritesBtn(cardData);
  }
});
