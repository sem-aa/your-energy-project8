import { getExerciseId } from '../services/api';
import { modal } from './modal';
import { updateRating } from '../helpers/update-rating';
import { getFromLocal } from '../services/local-storage';
import {
  addFavoriteCardToLocal,
  removeFavoriteCardFromLocal,
} from '../helpers/functions';

modal();

const card = document.querySelector('.modal-exercises');

let cardData;

function handleClickFavoritesBtn() {
  if (!getFromLocal('favorites')) {
    addFavoriteCardToLocal(cardData);
    return;
  }
  removeFavoriteCardFromLocal(cardData._id);
  return;
}

export async function modalExercises() {
  try {
    cardData = await getExerciseId('64f389465ae26083f39b17a2');
    card.innerHTML = createModalExercisesMarkup(cardData);
    updateRating(cardData.rating);

    document.addEventListener('click', event => {
      if (event.target.matches('.modal-exercises__button-favourites')) {
        console.log('Button clicked!');
        handleClickFavoritesBtn(cardData);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export function createModalExercisesMarkup(cardData) {
  const {
    name,
    burnedCalories,
    bodyPart,
    description,
    target,
    equipment,
    gifUrl,
    popularity,
    rating,
    time,
    _id,
  } = cardData;

  return `<div class="modal-exercises__card">
    <button type="button" class="modal-exercises__button-close">
      <svg class="modal-exercises__button-icon" width="12" height="12">
        <use href="./images/icons.svg#icon-button-close"></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${
        gifUrl !== null ? gifUrl : '../images/no-image.png'
      }" alt="${name}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${name}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${rating}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${target}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${bodyPart}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${equipment}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${popularity}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${burnedCalories}/${time} 
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${description}
      </p>
      <div class="modal-exercises__buttons">
        <button type="button" class="modal-exercises__button-favourites">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            width="20"
            height="20"
          >
            <use href="./images/icons.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="modal-exercises__button-rating">Give a rating</button>
      </div>
    </div>
  </div>`;
}

modalExercises();
