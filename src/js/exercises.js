import fetchSportEnergy from './api/apiSport';
import { loader } from './loader/loader';
import sprite from '../img/svg/sprite.svg';

import * as pagination from './pagination/pagination';
import { message } from './toasts/message';
import { cutString } from './favorite/slice-string';
import { capitalizeFirstLetter } from './utils/firstLater';



const paginationNumbers = document.querySelector('.pagination-numbers');
const list = document.querySelector('.filter-list-js');

const exercisesTag = document.querySelector('.title-exercises');
list.addEventListener('click', handlerClickFilterCards);

export async function handlerClickFilterCards(e) {
  e.preventDefault();
  const { target } = e;
  if ((target.nodeName !== 'IMG') & (target.parentNode.nodeName !== 'BUTTON')) {
    return;
  }
  document.querySelector('.form-js').classList.remove('hidden-form');

  let nameFilter;
  let nameCard;
  try {
    if (target.nodeName === 'IMG') {
      nameFilter = target.parentNode.parentNode.dataset.filter;
      nameCard = target.alt;
    }
    if (target.nodeName === 'P' || target.nodeName === 'H3') {
      nameFilter = target.parentNode.parentNode.parentNode.dataset.filter;
      nameCard = target.parentNode.parentNode.dataset.alt;
    }
    const dataExercises = {
      [nameFilter]: nameCard,
      page: 1,
      limit: 10,
    };
    exercisesTag.innerHTML = `Exercises / <spam class="search-target" id="tagret-js">${capitalizeFirstLetter(
      nameCard
    )}</spam>`;
    // searchCategory.innerHTML=`${capitalizeFirstLetter(nameCard)}`
        loader.open()
    const exercises = await fetchSportEnergy.getByFilterCategory(dataExercises);
        loader.close()

    if (exercises?.results.length) {
      list.classList.add('exercises_list');
      list.classList.remove('muscles-list');

      makeMarkupCards(exercises);
      paginationNumbers.innerHTML = '';
      const {totalPages} = exercises
      pagination.getPaginationNumbers(totalPages, dataExercises);

      pagination.setCurrentPage(1);
    } else {
      message.info('Oops. please, try other category this list empty :(');
    }
  } catch (er) {
    message.error(er.message);
  }
  // loader.close()
}

export function makeMarkupCards(exercises) {
  if (exercises.results.length) {
    const markup = exercises.results
      .map(({ _id, target, rating, name, burnedCalories, time, bodyPart }) => {
        return `
      <li class="exercises_list_item" id=${_id}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${
            target.toString().length > 8 ? target.slice(0, 8) + '...' : target
          }</div>
          <p class="exercises_rating">${rating.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${_id}>
              <use xlink:href="${sprite}#icon-star" data-id=${_id}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${_id}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${_id}>
              <use xlink:href="${sprite}#icon-arrow" data-id=${_id}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${sprite}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${
          name.toString().length > 20 ? name.slice(0, 20) + '...' : name
        } </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${burnedCalories ? burnedCalories : ''} / ${
          time ? time : 'your wish'
        } min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${cutString(bodyPart, 5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${cutString(
          target,
          7
        )}</span></p>
</li>
      </ul>
        </div>
    </li>`;
      })
      .join('');
    list.innerHTML = markup;
  }
}
