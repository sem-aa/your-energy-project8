const elements = {
  openModalButton: document.querySelector('.open-modal'),
  modalExercises: document.querySelector('.modal-exercises'),
};

const exercisesListRef = document.getElementById('exercises-list-container');
exercisesListRef.addEventListener('click', onExerciseListClick);

function onExerciseListClick(event) {
  if (!event.target.closest('[data-id]')) {
    return;
  }
}

export function modal() {
  if (elements.openModalButton && elements.modalExercises) {
    document.addEventListener('DOMContentLoaded', function () {
      elements.openModalButton.addEventListener('click', openModal);
      elements.modalExercises.addEventListener('click', handleModalClick);
      document.addEventListener('keydown', handleKeyDown);
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

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      elements.modalExercises.classList.add('visually-hidden');
    }
  }

  function removeListeners() {
    elements.openModalButton.removeEventListener('click', openModal);
    elements.modalExercises.removeEventListener('click', handleModalClick);
    document.removeEventListener('keydown', handleKeyDown);
  }

  return removeListeners;
}
