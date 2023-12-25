import { makeMarkupCards } from './exercises';
import fetchSportEnergy from './api/apiSport';
import * as pagination from './pagination/pagination';
import { message } from './toasts/message';
import { loader } from './loader/loader';

const form = document.querySelector('.form-js');
const paginationNumbers = document.querySelector('.pagination-numbers');
form.addEventListener('submit', handlerSearch);

async function handlerSearch(e) {
  e.preventDefault();
  const value = e.target.elements.search.value.trim();
  if (!value) return;
  let { categoryName } = JSON.parse(localStorage.getItem('infoRequest'));

  let transformCategoryName = categoryName.toLocaleLowerCase().replaceAll(' ', '');

  if (transformCategoryName === 'bodyparts') {
    transformCategoryName = 'bodypart';
  }
  const dataExercises = {
    [transformCategoryName]: value,
    page: 1,
    limit: 10,
  };
  try {
    loader.open();
    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
    loader.open();
    if (!exercises.results.length) {
      message.info('Nothing was found for this query');
    }
    paginationNumbers.innerHTML = '';
    const { totalPages } = exercises;
    pagination.getPaginationNumbers(totalPages, dataExercises);

    pagination.setCurrentPage(1);
    form.reset();
    makeMarkupCards(exercises);
  } catch (err) {
    console.log(err);
  }
}
