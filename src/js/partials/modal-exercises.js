import { getExerciseId } from '../../services/api';
import { modal } from './modal';
import { updateRatingStar } from '../../helpers/update-rating';
import { getFullUrl } from './search-params';
import { getFromLocal, saveToLocal } from '../../services/local-storage';
import {
  addFavoriteCardToLocal,
  removeFavoriteCardFromLocal,
} from '../../helpers/functions';
import { createCardsMarkupList } from './favorites';

import spriteUrl from '../../images/svg.icons/icons.svg';
import noImageUrl from '../../images/no-image.png';
import spriteWithShareUrl from '../../images/valkoSprite.svg';

const card = document.querySelector('.modal-exercises');
const favoritesList = document.getElementById('favorite-cards-list');

const checkLocation = window.location.href
  .split('/')
  .includes('favorites.html');

let cardData;

const checkIsFavourite = (data = getFromLocal('favorites') || []) => {
  return data.find(item => item?._id === cardData._id);
};

export const handleClickFavoritesBtn = cardData => {
  const favoriteButton = document.querySelector(
    '.modal-exercises__button-favourites'
  );

  if (!checkIsFavourite()) {
    addFavoriteCardToLocal(cardData);

    favoriteButton.innerHTML = `Unfavorite
    <svg
            class="modal-exercises__button-favourites_icon unfavorite-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${spriteUrl}#icon-trash></use>
          </svg>`;
    createCardsMarkupList(favoritesList);

    return;
  }

  removeFavoriteCardFromLocal(cardData._id);

  favoriteButton.innerHTML = `Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon add-to-favorites-btn"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${spriteUrl}#icon-heart></use>
          </svg>`;
  createCardsMarkupList(favoritesList);

  return;
};

export async function modalExercises(id) {
  try {
    cardData = await getExerciseId(id);
    card.innerHTML = createModalExercisesMarkup(cardData);

    updateRatingStar(cardData.rating);
    modal();

    const modalRef = document.querySelector('.modal-exercises__card');
    modalRef.addEventListener('click', event => {
      if (event.target.closest('.modal-exercises__button-favourites')) {
        handleClickFavoritesBtn(cardData);
      }
      if (event.target.closest('.modal-exercises__button-rating')) {
        const ratingModal = document.querySelector('#ratingModal');

        ratingModal.style.display = 'block';

        card.classList.add('visually-hidden');
      }
    });
    const shareButtonModalRef = document.querySelector('.share-button-modal');
    const shareButtonHintModalRef = document.querySelector(
      '.share-button-hint-modal'
    );
    shareButtonModalRef.addEventListener('click', onShareButtonModalClick);
    function onShareButtonModalClick(e) {
      const fullUrl = getFullUrl();
      const tempInput = document.createElement('input');
      tempInput.value = fullUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      shareButtonHintModalRef.textContent = 'Link copy!';
      setTimeout(() => {
        shareButtonHintModalRef.textContent = 'Share exercises';
      }, 1000);
    }
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
        <use href=${spriteUrl}#icon-button-close></use>
      </svg>
    </button>
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${
        gifUrl !== null ? gifUrl : noImageUrl
      }" alt="${name}" />
    </div>
    <div class="modal-exercises__description">
      <button class="share-button-modal" type="button">
        <svg class="share-icon">
          <use href=${spriteWithShareUrl}#icon-share-light></use>
        </svg>
        <span class="share-button-hint-modal">Share exercises</span>
      </button>
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
      ${
        checkLocation || checkIsFavourite()
          ? `<button 
          type="button"
          class="modal-exercises__button-favourites unfavorite-btn"
          >
          Unfavorite
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${spriteUrl}#icon-trash></use>
          </svg>`
          : `<button 
          type="button"
          class="modal-exercises__button-favourites
          add-to-favorites-btn">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${spriteUrl}#icon-heart></use>
          </svg>`
      }
        </button>
        <button class="modal-exercises__button-rating" data-value="${_id}">Give a rating</button>
      </div>
    </div>
  </div>`;
}
