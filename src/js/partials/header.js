const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const body = document.querySelector('body');

openBtn.addEventListener('click', function () {
  modal.style.display = 'block';
  body.classList.add('modal-open');
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  body.classList.remove('modal-open');
});

// Add class active in nav
document.addEventListener('DOMContentLoaded', function () {
  const currentUrl = window.location.pathname;
  const navItems = document.querySelectorAll('.nav_list li');

  navItems.forEach(function (item) {
    const link = item.querySelector('a').getAttribute('href');
    if (link === currentUrl) {
      item.classList.add('nav_item_active');
    }
  });

  if (!document.querySelector('.nav_list li.nav_item_active')) {
    navItems[0].classList.add('nav_item_active');
  }
});
