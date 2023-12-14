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
