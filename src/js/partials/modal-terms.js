const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-license-open]'),
  closeModalBtn: document.querySelector('[data-modal-license-close]'),
  modal: document.querySelector('[data-modal-license]'),
  body: document.querySelector('body'),
};

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  refs.body.style.overflow = 'auto';
};

const onCloseModal = event => {
  if (event.code !== 'Escape') return;
  toggleModal();
};

refs.openModalBtns.forEach((btn)=> btn?.addEventListener('click', event => {
  toggleModal();
  window.addEventListener('keydown', onCloseModal);
  refs.body.style.overflow = 'hidden';
}))


refs.closeModalBtn?.addEventListener('click', toggleModal);

refs.modal.addEventListener('click', event => {
  if (event.target !== event.currentTarget) return;
  toggleModal();
});
