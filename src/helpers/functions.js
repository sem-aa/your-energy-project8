import { getFromLocal, saveToLocal } from '../services/local-storage';
import { KEY_STORAGE } from '../helpers/constant';

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
