const createMarkupForChangableIcon = isFavorite => {
  const markupForIcon = isFavorite
    ? '<button type="button" class="remove-btn" id="remove-favorite-btn"><svg class="changeble-icon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg></button>'
    : '<div class="icon-rating-container"><p class="rating-info-card">4.0</p><svg class="changeble-icon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>';

  return markupForIcon;
};

export const createInfoCardMarkup = (cardData, isFavorite = false) => {
  const { name, burnedCalories, bodyPart, target, _id } = cardData;

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
        <li>
          <p class="item-text">
            Burned calories: <em class="hidden-overflow-text">${burnedCalories}/3<strong>min</strong></em>
          </p>
        </li>
        <li>
          <p class="item-text">Body part: <em>${bodyPart}</em></p>
        </li>
        <li>
          <p class="item-text">Target: <em>${target}</em></p>
        </li>
      </ul>
    </li>`;
};
