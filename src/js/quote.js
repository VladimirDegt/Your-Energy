import fetchSportEnergy from './api/apiSport';
import { loader } from './loader/loader';

const refs = {
  quoteText: document.querySelector('.quote-text'),
  quoteAuthor: document.querySelector('.quote-author'),
};

document.addEventListener('DOMContentLoaded', loadQuote);

export async function loadQuote() {
  const locStor = localStorage.getItem('quote');

  if (locStor) {
    const currentDate = new Date().toDateString();

    const { date: locStorDate, quote: locStorQuote, author: locStorAuthor } = JSON.parse(locStor);

    if (currentDate !== locStorDate) {
      fetchQuote();
    } else {
      refs.quoteText.innerHTML = locStorQuote;
      refs.quoteAuthor.innerHTML = locStorAuthor;
    }
  } else {
    fetchQuote();
  }
}

async function fetchQuote() {
    loader.open();
    const fetchQuote = await fetchSportEnergy.getQuotes();
    loader.close()

  const { author, quote } = fetchQuote;

  const quoteObj = {
    author,
    quote,
    date: new Date().toDateString(),
  };

  localStorage.setItem('quote', JSON.stringify(quoteObj));

  refs.quoteText.innerHTML = quote;
  refs.quoteAuthor.innerHTML = author;
}
