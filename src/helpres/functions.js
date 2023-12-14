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

// export const addFavoriteCardToLocal =  => {
//   const prevFavoriteCards = getFromLocal(KEY_STORAGE.favorites);

//   if (!prevFavoriteCards) {
//     alert('Oops! Refresh page');
//     return;
//   }
//   const newFavoriteCards = prevFavoriteCards.filter(
//     ({ _id }) => _id !== removedId
//   );

//   saveToLocal(KEY_STORAGE.favorites, newFavoriteCards);
// };
