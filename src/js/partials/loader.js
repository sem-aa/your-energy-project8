const loader = document.querySelector('.js-loader');

export function showLoader() {
  loader.classList.remove('.is-hidden');
}

export function hideLoader() {
  loader.classList.add('.is-hidden');
}
