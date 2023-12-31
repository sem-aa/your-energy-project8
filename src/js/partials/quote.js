import { getPhraseDay } from '../../services/api';
import { getFromLocal, saveToLocal } from '../../services/local-storage';
import { KEY_STORAGE } from '../../helpers/constant';
import spriteUrl from '../../images/svg.icons/symbol-defs.svg';
import quoteHomeDesk1xUrl from '../../images/quote-home-desk@1x.webp';
import quoteHomeDesk2xUrl from '../../images/quote-home-desk@2x.webp';

const quoteSectionRef = document.querySelector('.quote');

const addPaddingForQuoteSection = () => {
  if (window.innerWidth < 768) {
    quoteSectionRef.style.paddingBottom = '40px';
  }

  if (window.innerWidth > 768 && window.innerWidth < 1440) {
    quoteSectionRef.style.paddingBottom = '0';
  }
};

function createQuoteMarkup(quote) {
  return `<div class="quote-container container">
    <div class="quote-of-the-day">
      <svg class="quote-icon" width="34" height="32">
        <use href=${spriteUrl}#icon-runing-man></use>
      </svg>
      <h2 class="quote-heading">Quote of the day</h2>
      <svg class="invert-coma-icon" width="20" height="20">
        <use
          href=${spriteUrl}#icon-inverted-commas
        ></use>
      </svg>
      <p class="quote-text">${quote.quote}</p>
      <p class="quote-author">${quote.author}</p>
    </div>
    <div class="quote-image">
      <picture>
        <source
          srcset="${quoteHomeDesk1xUrl} 1x, ${quoteHomeDesk2xUrl} 2x"
          media="(min-width: 768px)"
        />

        <img
          class="hero-img cropped-image"
          src=${quoteHomeDesk1xUrl}
          alt="women-sportswear-taking-break-from-workout"
        />
      </picture>
    </div>
    <div class="recomendation-container">
      <svg class="recoendation-icon" width="34" height="32">
        <use href=${spriteUrl}#icon-dumb-bell></use>
      </svg>
      <h3 class="recomendation-heading">110 min</h3>
      <h4 class="recomendation-subheading">Daily norm of sports</h4>
      <div class="recomendation-text-container">
        <p class="recomendation-text">
          The World Health Organization recommends at least 150 minutes of
          moderate-intensity aerobic physical activity throughout the week for
          adults aged 18-64. However, what happens if we adjust that number to
          110 minutes every day? While it might seem like a high number to hit,
          dedicating 110 minutes daily to sporting activities may offer
          unparalleled benefits to physical health, mental well-being, and
          overall quality of life.
        </p>
      </div>
    </div>
  </div>`;
}

const today = new Date();

function checkDateIsNow(checkedDate) {
  if (!checkedDate) return false;
  return (
    today.getDate() === checkedDate.getDate() &&
    today.getMonth() === checkedDate.getMonth() &&
    today.getFullYear() === checkedDate.getFullYear()
  );
}

async function onLoadPage() {
  const phraseFromLS = getFromLocal(KEY_STORAGE.phrase);
  if (!phraseFromLS || !checkDateIsNow(new Date(phraseFromLS.date))) {
    const data = await getPhraseDay();
    saveToLocal(KEY_STORAGE.phrase, { ...data, date: today });
  }
  const acctualPhrase = getFromLocal(KEY_STORAGE.phrase);
  if (quoteSectionRef) {
    quoteSectionRef.innerHTML = createQuoteMarkup(acctualPhrase);
    addPaddingForQuoteSection();
  }
}

onLoadPage();
