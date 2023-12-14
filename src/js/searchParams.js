export function getFullUrl() {
  const fullUrl = window.location.href;
  return fullUrl;
}

function getAllParameters() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const allParametrs = {};
  urlParams.forEach(function (value, key) {
    allParametrs[key] = value;
  });

  return allParametrs;
}

export function getValueParameterByName(name) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
}

export function setSearchParams(key, value) {
  const currentUrl = new URL(location.href);
  currentUrl.searchParams.set(key, value);
  history.pushState({}, '', currentUrl);
}

export function removeSearchParams(keys) {
  const currentUrl = new URL(location);
  const searchParams = new URLSearchParams(currentUrl.search);
  keys.forEach(key => {
    searchParams.delete(key);
  });
  currentUrl.search = searchParams.toString();
  history.pushState(null, '', currentUrl);
}

// при кліку на кнопки Muscles, Body parts, Equipment потрібно записувати пошуковий параметр 'filter' з відповідним значенням ("Body parts", "Muscles", "Equipment"). Наприклад, setSearchParams('filter', 'Muscles'); setSearchParams('filter', 'Body parts');
// setSearchParams('filter', 'Muscles');      //http://localhost:5173/?filter=Muscles
// setSearchParams('filter', 'Body parts');   // http://localhost:5173/?filter=Body+parts
setSearchParams('filter', 'Equipment');
removeSearchParams(['bodypart', 'muscles', 'equipment', 'keyword']); //http://localhost:5173/?filter=Equipment

// при кліку на великі картки категорій вправ потрібно записувати відповідний пошуковий параметр ("bodypart" або "muscles" або "equipment") з відповідним значенням. Наприклад, setSearchParams('bodypart', 'back'); setSearchParams('muscles', 'lats') та видаляти параметр 'filter';
removeSearchParams(['bodypart', 'muscles', 'equipment', 'filter']);
setSearchParams('muscles', 'lats'); // http://localhost:5173/?muscles=lats

// при сабміті форми пошуку за ключовим словом потрібно додатково до попереднього параметра записувати відповідний пошуковий параметр ("keyword") з відповідним значенням. Наприклад, setSearchParams('keyword', 'pull'); setSearchParams('keyword', 'back');
// !!!!!! параметр keyword обов'язково має бути в парі з одним із цим параметрів ("bodypart" або "muscles" або "equipment"), це умова бекенду
// setSearchParams('keyword', 'back'); // http://localhost:5173/?muscles=lats&keyword=back
//
//
//
//
// не потрібно записувати у пошукові параметри, ліміт визначається джс і стилями залежно від розміру вьюпорта
// setSearchParams('limit', '9');
//
// не потрібно записувати у пошукові параметри, бо при шарінгу між різними пристроями через різні ліміти будуть різни сторінки. Наприклад, setSearchParams('page', '1'); setSearchParams('page', '2');
// setSearchParams('page', '1');
// setSearchParams('page', '2');
