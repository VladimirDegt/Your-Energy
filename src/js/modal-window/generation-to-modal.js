import sprite from '../../img/svg/sprite.svg';
import { capitalizeFirstLetter } from '../utils/firstLater';

function getRating(rating) {

  const lastStar = (rating % 1).toFixed(1)*100
  let result = '<div class="rating-container-not-cursore" data-rating="0">'
  for (let i = 1; i <= rating+1; i += 1) {
    if (i <= rating) {
      result += `<span class="star-js selected" data-value="${i}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>`
    } else {
      if (lastStar > 0) {
        result += `<span class="last-star-js" data-value="${i}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-lastStar}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${lastStar}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`
      }
    }
  }
  for (let i = rating+1; i <= 5; i += 1) {
    result += `<span class="star-js" data-value="${i}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>`
  }

  return result +'</div>'
}


function getButtonFavorite(isFavorite) {
  if (isFavorite) {
    return `<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${sprite}#icon-trash"></use>
              </svg>
          </button>`
    } else {
      return `<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${sprite}#icon-heart"></use>
                </svg>
              </button>`
    }
}


export function getExerciseModal(data) {
    return `<div class="modal-info" data-id="${data._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${sprite}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${data.gifUrl}" alt="${data.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${capitalizeFirstLetter(data.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${data.rating.toFixed(1)}</p>${getRating(data.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${data.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${data.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${data.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${data.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${data.burnedCalories}/${data.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${data.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${data.favorite}">
          ${getButtonFavorite(data.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`
}

export function getRatingModal(idExercise) {
    return `<div class="modal-get-raiting" data-id="${idExercise}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${sprite}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${sprite}#icon-star"></use>
              />
            </svg></span>
        </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit" type="submit">Send</button>
      </form>
    </div>
  </div>`
}