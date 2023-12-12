import { KEY_STORAGE } from '../helpres/constant';

export const saveToLocal = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
    console.error('Error save localStorage:', error);
  }
};

export const getFromLocal = key => {
  try {
    const storedItem = localStorage.getItem(key);

    if (storedItem) {
      return JSON.parse(storedItem);
    }

    return null;
  } catch (error) {
    console.error('Error get localStorage:', error);
    return null;
  }
};

export const deleteInLocal = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error delete localStorage:', error);
  }
};

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
