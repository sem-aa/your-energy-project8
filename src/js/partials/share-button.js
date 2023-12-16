import { getFullUrl } from './search-params';

const shareButtonRef = document.querySelector('.share-button');

const shareButtonHintRef = document.querySelector('.share-button-hint-modal');

shareButtonRef.addEventListener('click', onShareButtonClick);

function onShareButtonClick(e) {
  const fullUrl = getFullUrl();
  const tempInput = document.createElement('input');
  tempInput.value = fullUrl;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  shareButtonHintRef.textContent = 'Link copy!';
  setTimeout(() => {
    shareButtonHintRef.textContent = 'Share exercises';
  }, 1000);
}
