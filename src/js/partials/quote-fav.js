import { KEY_STORAGE } from '../../helpers/constant';
import { getFromLocal } from '../../services/local-storage';

const quoteText = document.querySelector('.quote-text-fav');
const quoteAuthor = document.querySelector('.quote-author-fav');

const acctualPhrase = getFromLocal(KEY_STORAGE.phrase);
console.log(acctualPhrase);
quoteText.textContent = acctualPhrase.quote;
quoteAuthor.textContent = acctualPhrase.author;
