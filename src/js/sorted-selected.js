import SlimSelect from 'slim-select';

const sortedSelectRef = document.querySelector('#sorted-select');
new SlimSelect({
  select: '#sorted-select',
  settings: {
    showSearch: false,
  },
  data: [
    { text: 'Default sort', value: 'default', class: 'sorted-option' },
    { text: 'Best Match', value: 'best', class: 'sorted-option' },
    {
      text: 'Calories: lowest first',
      value: 'calories-lowest',
      class: 'sorted-option',
    },
    {
      text: 'Calories: highest first',
      value: 'calories-highest',
      class: 'sorted-option',
    },
  ],
});

const renderInfoCardItems = array => {
  const markup = array.map(createInfoCardMarkup).join('');
  favoritesList.innerHTML = markup;
};

sortedSelectRef.addEventListener('change', onSortedSelectChange);

function onSortedSelectChange(e) {
  const sortType = e.target.value;
  const sortedArray = getSortedArrayInfoCards({
    sortType,
    array: arrayCardsForTest,
  });

  // here you need to call a function that renders cards with information, passing it with the sortedArray argument.
  // renderInfoCardItems for test
  renderInfoCardItems(sortedArray); //
}

function getSortedArrayInfoCards({ sortType, array }) {
  let sortedArray;

  switch (sortType) {
    case 'default':
      sortedArray = array.toSorted((a, b) => a.name.localeCompare(b.name));
      break;

    case 'best':
      sortedArray = array.toSorted((a, b) => b.rating - a.rating);
      break;

    case 'calories-highest':
      sortedArray = array.toSorted(
        (a, b) => b.burnedCalories - a.burnedCalories
      );
      break;

    case 'calories-lowest':
      sortedArray = array.toSorted(
        (a, b) => a.burnedCalories - b.burnedCalories
      );
      break;

    default:
      sortedArray = array.toSorted((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return sortedArray;
}
