import { createShortString } from '../js/favorites';

const createMarkupForChangableIcon = isFavorite => {
  const markupForIcon = isFavorite
    ? '<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>'
    : '<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="/oleksii-symbol-defs.svg#icon-star"></use></svg></div>';

  return markupForIcon;
};

export const createInfoCardMarkup = (cardData, isFavorite = false) => {
  const { name, burnedCalories, bodyPart, target, _id, time } = cardData;

  return `<li class="favorite-info-card" data-id=${_id}>
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${createMarkupForChangableIcon(isFavorite)}
        </div>
        <div>
          <button type="button" class="start-btn">
            <p>Start</p>
            <svg width="16" height="16">
              <use href="/oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-title-container">
         <svg width="24" height="24">
          <use href="/oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="card-title">${name}</h3>
      </div>
      <ul class="card-info-list">
        <li>
          <p class="item-text">
            Burned ccal: <em class="hidden-overflow-text">${createShortString(
              `${burnedCalories}/${time}`
            )}<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em class="hidden-overflow-text">${createShortString(
            `${bodyPart}`
          )}</em></p>
        </li>
        <li>
          <p class="item-text" id="exercise-info-text">Target: <em class="hidden-overflow-text">${createShortString(
            `${target}`
          )}</em></p>
        </li>
      </ul>
    </li>`;
};

export const createCategoryCardListMarkup = data => {
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
};

export const createPaginationMarkup = (data, filter) => {
  let pagesArray = [];

  for (let page = 1; page <= data.totalPages; page++) {
    let current = page.toString() === data.page ? 'current' : '';

    pagesArray.push(` <li class="exercises_pagination-item ${current}">
        <a class="page-num" data-page="${page}" data-filter="${filter}">${page}</a>
      </li>`);
  }

  return pagesArray.join('');
};
