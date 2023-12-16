export function getFullUrl() {
  const fullUrl = window.location.href;
  return fullUrl;
}

export function getAllParameters() {
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

export function removeSearchParamsByName(key) {
  const currentUrl = new URL(location);
  const searchParams = new URLSearchParams(currentUrl.search);
  searchParams.delete(key);
  currentUrl.search = searchParams.toString();
  history.pushState(null, '', currentUrl);
}

export function removeAllSearchParams() {
  const allParamsKeys = Object.keys(getAllParameters());
  allParamsKeys.forEach(removeSearchParamsByName);
}

export function onLoadHomePage() {
  const allParams = getAllParameters();
  const { filter, keyword, ...params } = allParams;

  if (!Object.keys(allParams).length) return;

  const nameSearchParams = Object.keys(params)[0];

  if (filter) {
    const nameActiveButton = getValueParameterByName('filter');
    console.log(
      `Зроби запит з параметром '${nameActiveButton}', відмалюй картки з відповіді та встанови на кнопках активний фільтр ${nameActiveButton}`
    );
    return;
  }

  if (keyword) {
    console.log(
      `Заповни інпут форми словом "${keyword}" та зроби запит з параметрами "${nameSearchParams}=${params[nameSearchParams]}&keyword=${keyword}" та відмалюй картки з відповіді`
    );
    return;
  }

  console.log(
    `Зроби запит з параметром "${nameSearchParams}=${params[nameSearchParams]}" та відмалюй картки з відповіді`
  );
  return;
}

// onLoadHomePage();

// при кліку на кнопки Muscles, Body parts, Equipment потрібно видаляти усі попередні пошукові парметри і записувати пошуковий параметр 'filter' з відповідним значенням ("Body parts", "Muscles", "Equipment"). Наприклад, setSearchParams('filter', 'Muscles'); setSearchParams('filter', 'Body parts');

// removeAllSearchParams();
// setSearchParams('filter', 'Body parts');

// при кліку на великі картки категорій вправ потрібно видаляти усі попередні пошукові парметри і записувати відповідний пошуковий параметр ("bodypart" або "muscles" або "equipment") з відповідним значенням. Наприклад, setSearchParams('bodypart', 'back'); setSearchParams('muscles', 'lats');
// removeAllSearchParams();
// setSearchParams('muscles', 'lats'); // http://localhost:5173/?muscles=lats

// при сабміті форми пошуку за ключовим словом потрібно додатково до попереднього параметра записувати відповідний пошуковий параметр ("keyword") з відповідним значенням. Наприклад, setSearchParams('keyword', 'pull'); setSearchParams('keyword', 'back');
// !!!!!! параметр keyword обов'язково має бути в парі з одним із цим параметрів ("bodypart" або "muscles" або "equipment"), це умова бекенду
// setSearchParams('keyword', 'back'); // http://localhost:5173/?muscles=lats&keyword=back

//
// не потрібно записувати у пошукові параметри, ліміт визначається джс і стилями залежно від розміру вьюпорта. Наприклад setSearchParams('limit', '9');

// не потрібно записувати у пошукові параметри, бо при шарінгу між різними пристроями через різні ліміти будуть різни сторінки. Наприклад, setSearchParams('page', '1'); setSearchParams('page', '2');

// removeAllSearchParams();
// setSearchParams('filter', 'Body parts');
