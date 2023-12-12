const createMarkupForChangableIcon = isFavorite => {
  const markupForIcon = isFavorite
    ? '<svg class="ChangebleIcon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg>'
    : '<div class="IconRatingContainer"><p class="RatingInfoCard">4.0</p><svg class="ChangebleIcon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>';

  return markupForIcon;
};

export const createInfoCardMarkup = (cardData, isFavorite = false) => {
  const { name, burnedCalories, bodyPart, target } = cardData;

  return `<li class="favorite-info-card">
      <div class="card-header">
        <div class="category-and-icon">
          <div class="category-tag"><p>Workout</p></div>
          ${createMarkupForChangableIcon(isFavorite)}
        </div>
        <div class="card-title-container">
          <button type="button" class="start-btn">
            <p>Start</p>
            <svg width="16" height="16">
              <use href="../public/oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-title-container">
         <svg width="24" height="24">
          <use href="../public/oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="card-title">${name}</h3>
      </div>
      <ul class="card-info-list">
        <li class="InfoListItem">
          <p class="item-text">
            Burned calories: <em class="InfoData">${burnedCalories}/3<strong>min</strong></em>
          </p>
        </li>
        <li class="InfoListItem">
          <p class="item-text">Body part: <em class="InfoData">${bodyPart}</em></p>
        </li>
        <li class="InfoListItem">
          <p class="item-text">Target: <em class="InfoData">${target}</em></p>
        </li>
      </ul>
    </li>`;
};
