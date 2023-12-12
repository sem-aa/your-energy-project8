const createMarkupForChangableIcon = isFavorite => {
  const markupForIcon = isFavorite
    ? '<svg class="ChangebleIcon" width="16" height="16"><use href="../public/oleksii-symbol-defs.svg#icon-trash"></use></svg>'
    : '<div class="IconRatingContainer"><p class="RatingInfoCard">4.0</p><svg class="ChangebleIcon" width="18" height="18"><use href="../public/oleksii-symbol-defs.svg#icon-star"></use></svg></div>';

  return markupForIcon;
};

const CreateInfoCardMarkup = (cardData, isFavorite = false) => {
  const { category, title, calories, bodyPart, target } = cardData;

  return `<div class="FavoriteInfoCard">
      <div class="CardHeader">
        <div class="CategoryAndIcon">
          <div class="CategoryTag"><p>${category}</p></div>
          ${createMarkupForChangableIcon(isFavorite)}
        </div>
        <div class="StartBtnContainer">
          <button type="button" class="StartBtn">
            <p>Start</p>
            <svg width="16" height="16">
              <use href="../public/oleksii-symbol-defs.svg#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="CardTitleContainer">
         <svg width="24" height="24">
          <use href="../public/oleksii-symbol-defs.svg#icon-man"></use>
        </svg>
        <h3 class="CardTitle">${title}</h3>
      </div>
      <ul class="CardInfoList">
        <li class="InfoListItem">
          <p class="ItemText">
            Burned calories: <em class="InfoData">${calories}</em>
          </p>
        </li>
        <li class="InfoListItem">
          <p class="ItemText">Body part: <em class="InfoData">${bodyPart}</em></p>
        </li>
        <li class="InfoListItem">
          <p class="ItemText">Target: <em class="InfoData">${target}</em></p>
        </li>
      </ul>
    </div>`;
};
