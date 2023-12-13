const elements = {
  openModalButton: document.querySelector('.openModalButton'),
  closeModalButton: document.querySelector('.modal-exercises__button-close'),
  modalExercises: document.querySelector('.modal-exercises'),
};

export function modal() {
  if (
    elements.openModalButton &&
    elements.closeModalButton &&
    elements.modalExercises
  ) {
    document.addEventListener('DOMContentLoaded', function () {
      elements.openModalButton.addEventListener('click', openModal);
      elements.closeModalButton.addEventListener('click', closeModal);
      window.addEventListener('click', closeModalOutside);
    });
  } else {
    console.error(
      'One or more elements not found. Check your HTML and selectors.'
    );
  }

  function openModal() {
    elements.modalExercises.classList.remove('visually-hidden');
  }

  function closeModal(event) {
    if (
      event.target === elements.modalExercises ||
      event.target === elements.closeModalButton
    ) {
      elements.modalExercises.classList.add('visually-hidden');
    }
  }

  function closeModalOutside(event) {
    if (event.target === elements.modalExercises) {
      elements.modalExercises.classList.add('visually-hidden');
    }
  }
}
