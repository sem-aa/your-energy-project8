const elements = {
  openModalButton: document.querySelector('.open-modal'),
  modalExercises: document.querySelector('.modal-exercises'),
};

export function modal() {
  if (elements.openModalButton && elements.modalExercises) {
    document.addEventListener('DOMContentLoaded', function () {
      elements.openModalButton.addEventListener('click', openModal);
      elements.modalExercises.addEventListener('click', handleModalClick);
    });
  } else {
    console.error(
      'One or more elements not found. Check your HTML and selectors.'
    );
  }

  function openModal() {
    elements.modalExercises.classList.remove('visually-hidden');
  }

  function handleModalClick(event) {
    const closeButton = event.target.closest('.modal-exercises__button-close');

    if (closeButton) {
      elements.modalExercises.classList.add('visually-hidden');
    } else if (event.target === elements.modalExercises) {
      elements.modalExercises.classList.add('visually-hidden');
    }
  }
}
