const loader = document.querySelector('.js-loader');

function showLoader() {
  loader.classList.remove('.is-hidden');
}

function hideLoader() {
  loader.classList.add('.is-hidden');
}
