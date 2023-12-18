const refs = {
  openModalBtn: document.querySelector('[data-modal-privacy-open]'),
  closeModalBtn: document.querySelector('[data-modal-privacy-close]'),
  modal: document.querySelector('[data-modal-privacy]'),
  body: document.querySelector('body'),
};

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  if (refs.modal.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onCloseModal);
    refs.body.style.overflow = 'auto';
  } else {
    window.addEventListener('keydown', onCloseModal);
    refs.body.style.overflow = 'hidden';
  }
};

const onCloseModal = event => {
  if (event.code !== 'Escape') return;
  toggleModal();
  window.removeEventListener('keydown', onCloseModal);
};

const handleOpenPrivacyModal = event => {
  if (event.target !== event.currentTarget) return;
  toggleModal();
  window.addEventListener('keydown', onCloseModal);
  refs.modal.addEventListener('click', handleBackdropPrivacyClick);

  refs.body.style.overflow = 'hidden';
};

const handleBackdropPrivacyClick = event => {
  if (event.target !== event.currentTarget) return;
  toggleModal();

  window.removeEventListener('keydown', onCloseModal);
};

refs.openModalBtn?.addEventListener('click', handleOpenPrivacyModal);

refs.closeModalBtn.addEventListener('click', toggleModal);

refs.modal.addEventListener('click', handleBackdropClick);
