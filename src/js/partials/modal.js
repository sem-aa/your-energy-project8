import { modalExercises } from './modal-exercises';

const elements = {
  openModalButton: document.querySelector('.open-modal'),
  modalExercises: document.querySelector('.modal-exercises'),
};

const exercisesListRef = document.getElementById('exercises-list-container');

if (exercisesListRef) {
  exercisesListRef.addEventListener('click', onExerciseListClick);
}

export function onExerciseListClick(event) {
  if (event.target.matches('.changable-icon-use')) {
    return;
  }

  if (!event.target.closest('[data-id]')) {
    return;
  }

  const id = event.target.closest('[data-id]').dataset.id;

  modalExercises(id);
}

export function modal() {
  elements.modalExercises.addEventListener('click', handleModalClick);
  document.addEventListener('keydown', handleKeyDown);
  openModal();

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
