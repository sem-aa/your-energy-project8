import { getFullUrl } from './search-params';

const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const body = document.querySelector('body');
const navFav = document.querySelector('.nav_link_favorites');
const navHome = document.querySelector('.nav_link_home');

openBtn.addEventListener('click', function () {
  modal.style.display = 'block';
  body.classList.add('modal-open');
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  body.classList.remove('modal-open');
});

if (getFullUrl().includes('favorites')) {
  navHome?.classList.remove('nav_item_active');
  navFav?.classList.add('nav_item_active');
} else {
  navHome?.classList.add('nav_item_active');
  navFav?.classList.remove('nav_item_active');
}
