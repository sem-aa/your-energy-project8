import { getFromLocal, saveToLocal } from '../services/local-storage';

export const removeFavoriteCardFromLocal = removedId => {
  const prevFavoriteCards = getFromLocal(KEY_STORAGE.favorites);
  if (!prevFavoriteCards) {
    alert('Oops! Refresh page');
    return;
  }
  const newFavoriteCards = prevFavoriteCards.filter(
    ({ _id }) => _id !== removedId
  );

  saveToLocal(KEY_STORAGE.favorites, newFavoriteCards);
};

export const handleClickFavoritesBtn = cardData => {
  if (!getFromLocal('favorites')) {
    addFavoriteCardToLocal(cardData);
    return;
  }

  removeFavoriteCardFromLocal(cardData._id);
  return;
};

export const addFavoriteCardToLocal = ({
  name,
  burnedCalories,
  bodyPart,
  target,
  _id,
  time,
  gifUrl,
}) => {
  const prevFavoriteCards = getFromLocal(KEY_STORAGE.favorites) || [];

  const newFavoriteCards = [
    ...prevFavoriteCards,
    {
      name,
      burnedCalories,
      bodyPart,
      target,
      _id,
      time,
      gifUrl,
    },
  ];

  saveToLocal('favorites', newFavoriteCards);
};
