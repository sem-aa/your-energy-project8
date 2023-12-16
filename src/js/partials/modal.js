import { modalExercises } from './modal-exercises';
import {
  getValueParameterByName,
  removeSearchParamsByName,
  setSearchParams,
} from './search-params';

const elements = {
  openModalButton: document.querySelector('.open-modal'),
  modalExercises: document.querySelector('.modal-exercises'),
  body: document.body,
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
  setSearchParams('modalOpen', id);
  modalExercises(id);
}

export function modal() {
  elements.modalExercises.addEventListener('click', handleModalClick);
  document.addEventListener('keydown', handleKeyDown);
  openModal();

  function openModal() {
    elements.modalExercises.classList.remove('visually-hidden');
    elements.body.classList.add('modal-open');
  }

  function handleModalClick(event) {
    const closeButton = event.target.closest('.modal-exercises__button-close');

    if (closeButton) {
      elements.modalExercises.classList.add('visually-hidden');
      elements.body.classList.remove('modal-open');
      removeSearchParamsByName('modalOpen');
    } else if (event.target === elements.modalExercises) {
      elements.modalExercises.classList.add('visually-hidden');
      elements.body.classList.remove('modal-open');

      removeSearchParamsByName('modalOpen');
    } else if (event.target === elements.modalExercises) {
      elements.modalExercises.classList.add('visually-hidden');
      removeSearchParamsByName('modalOpen');
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      elements.modalExercises.classList.add('visually-hidden');
      elements.body.classList.remove('modal-open');

      removeSearchParamsByName('modalOpen');
    }
  }

  function removeListeners() {
    elements.openModalButton.removeEventListener('click', openModal);
    elements.modalExercises.removeEventListener('click', handleModalClick);
    document.removeEventListener('keydown', handleKeyDown);
  }

  return removeListeners;
}

function onLoadPage() {
  const id = getValueParameterByName('modalOpen');
  if (!id) return;
  modalExercises(id);
}
onLoadPage();
