import { subscribe } from '../services/api';

const subscribeFormRef = document.querySelector('.footer-form');

subscribeFormRef.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const req = {
    email: e.target.elements.email.value,
  };
  subscribeFormRef.reset();
  subscribe(req).then(res =>
    res.status === 201
      ? alert(res.data.message)
      : alert('Sorry, something went wrong((')
  );
}
