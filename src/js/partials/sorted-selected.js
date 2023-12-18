import SlimSelect from 'slim-select';

export const sortedSelectInstance = new SlimSelect({
  select: '#sorted-select',
  settings: {
    showSearch: false,
  },
  data: [
    {
      text: 'Default sort',
      value: 'default',
      class: 'sorted-option',
      id: 'sort-type-default',
    },
    {
      text: 'Best Match',
      value: 'best',
      class: 'sorted-option',
      id: 'sort-type-best',
    },
    {
      text: 'Calories: lowest first',
      value: 'calories-lowest',
      class: 'sorted-option',
      id: 'sort-type-calories-lowest',
    },
    {
      text: 'Calories: highest first',
      value: 'calories-highest',
      class: 'sorted-option',
      id: 'sort-type-calories-highest',
    },
  ],
});

export function onSortedSelectChange(e, array) {
  const sortType = e.target.value;

  const sortedResults = getSortedArrayInfoCards({
    sortType,
    array,
  });

  exercisesContainer.innerHTML = sortedResults
    .map(result => {
      let isFavorite = false;
      if (favFromLocalArr.includes(result._id)) {
        isFavorite = true;
      }
      return createInfoCardMarkup(result, isFavorite);
    })
    .join(''); //
}

export function getSortedArrayInfoCards({ sortType, array }) {
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
