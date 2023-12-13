import { subscribe } from '../services/api';

const subscribeFormRef = document.querySelector('.footer-form');

subscribeFormRef.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const req = {
    email: e.target.elements.email.value,
  };
  subscribeFormRef.reset();
  subscribe(req).then(res => {    
    switch (res.status) {
      case 201:
        alert(res.data.message);
        break;
      case 409:
        alert(res.data.message);
        break;
      default:
        alert('Sorry, something went wrong((');
        break;
    }    
  });
}
