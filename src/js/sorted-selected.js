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
// need to remove
// import { createInfoCardMarkup } from '../helpres/markup';
// const favoritesList = document.getElementById('favorite-cards-list');
// favoritesList.style.display = 'flex';
// favoritesList.style.flexWrap = 'wrap';
// const arrayCardsForTest = [
//   {
//     _id: '64f389465ae26083f39b183e',
//     bodyPart: 'back',
//     equipment: 'cable',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0180.gif',
//     name: 'cable low seated row',
//     target: 'upper back',
//     description:
//       'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
//     rating: 4.09,
//     burnedCalories: 284,
//     time: 3,
//     popularity: 1265,
//   },
//   {
//     _id: '64f389465ae26083f39b187b',
//     bodyPart: 'back',
//     equipment: 'barbell',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0248.gif',
//     name: 'cambered bar lying row',
//     target: 'upper back',
//     description:
//       'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
//     rating: 4.2,
//     burnedCalories: 318,
//     time: 3,
//     popularity: 1129,
//   },
//   {
//     _id: '64f389465ae26083f39b18b7',
//     bodyPart: 'back',
//     equipment: 'dumbbell',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0327.gif',
//     name: 'dumbbell incline row',
//     target: 'upper back',
//     description:
//       'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
//     rating: 4.33,
//     burnedCalories: 308,
//     time: 3,
//     popularity: 1016,
//   },
//   {
//     _id: '64f389465ae26083f39b1936',
//     bodyPart: 'back',
//     equipment: 'body weight',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0466.gif',
//     name: 'gironda sternum chin',
//     target: 'lats',
//     description:
//       'These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.',
//     rating: 3,
//     burnedCalories: 232,
//     time: 3,
//     popularity: 803,
//   },
//   {
//     _id: '64f389465ae26083f39b194a',
//     bodyPart: 'back',
//     equipment: 'body weight',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0498.gif',
//     name: 'inverted row with straps',
//     target: 'upper back',
//     description:
//       'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
//     rating: 3,
//     burnedCalories: 117,
//     time: 3,
//     popularity: 71,
//   },
//   {
//     _id: '64f389465ae26083f39b184c',
//     bodyPart: 'back',
//     equipment: 'cable',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0197.gif',
//     name: 'cable pulldown (pro lat bar)',
//     target: 'lats',
//     description:
//       'These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.',
//     rating: 4.25,
//     burnedCalories: 270,
//     time: 3,
//     popularity: 171,
//   },
//   {
//     _id: '64f389465ae26083f39b185d',
//     bodyPart: 'back',
//     equipment: 'cable',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0214.gif',
//     name: 'cable seated one arm alternate row',
//     target: 'upper back',
//     description:
//       'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
//     rating: 4,
//     burnedCalories: 222,
//     time: 3,
//     popularity: 64,
//   },
//   {
//     _id: '64f389465ae26083f39b1877',
//     bodyPart: 'back',
//     equipment: 'cable',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0244.gif',
//     name: 'cable twisting pull',
//     target: 'lats',
//     description:
//       'These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.',
//     rating: 3,
//     burnedCalories: 306,
//     time: 3,
//     popularity: 66,
//   },
//   {
//     _id: '64f389465ae26083f39b1895',
//     bodyPart: 'back',
//     equipment: 'dumbbell',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0293.gif',
//     name: 'dumbbell bent over row',
//     target: 'upper back',
//     description:
//       'This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.',
//     rating: 3.5,
//     burnedCalories: 309,
//     time: 3,
//     popularity: 41,
//   },
//   {
//     _id: '64f389465ae26083f39b18a0',
//     bodyPart: 'back',
//     equipment: 'dumbbell',
//     gifUrl: 'http://ftp.goit.study/img/power-pulse/gifs/0304.gif',
//     name: 'dumbbell decline shrug v. 2',
//     target: 'traps',
//     description:
//       "Located on the upper back and neck, they're involved in scapular elevation, retraction, and depression. Shrugs and upright rows target the traps.",
//     rating: 3,
//     burnedCalories: 308,
//     time: 3,
//     popularity: 33,
//   },
// ];
const renderInfoCardItems = array => {
  const markup = array.map(createInfoCardMarkup).join('');
  favoritesList.innerHTML = markup;
};

// no need remove

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
