import { subscribe } from '../../services/api';
import iziToast from 'izitoast';

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
        iziToast.success({
          message: res.data.message
        })        
        break;
      case 409:
        iziToast.info({
          message: res.data.message
        })        
        break;
      default:
        iziToast.warning({
          message: 'Sorry, something went wrong'
        })       
        break;
    }    
  });
}
