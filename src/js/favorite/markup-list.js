import sprite from '../../img/svg/sprite.svg';
import {cutString} from './slice-string';

export function markupList(arr) {
  const list = document.querySelector('.filter-list-js');
  list.classList.remove('hidden-form');

  if(arr.length > 6){
    list.classList.add('scroll');
  } else {
    list.classList.remove('scroll');

  }

  const markup = arr
    .map(
      ({ _id, target, name, bodyPart, burnedCalories, time }) => `
  <li class="favourites_list_item" id=${_id}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${cutString(target, 6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${_id}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${_id}>
            <use class="favourites_btn_trash_icon" href="${sprite}#icon-trash" data-id=${_id}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${_id}>
          <p class="favourites_btn_start_text" data-id=${_id}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${_id}>
            <use href="${sprite}#icon-arrow" data-id=${_id}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${sprite}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${cutString(name, 16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${burnedCalories}/${time}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${cutString(bodyPart, 5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${cutString(
            target,
            7
          )}</span></p>
        </li>
      </ul>
    </div>
  </li>`
    )
    .join('');

    list.innerHTML = markup;
}
