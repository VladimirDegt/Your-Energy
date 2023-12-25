import sprite from '../img/svg/sprite.svg';

function scrollToTopButton() {
  const button = document.createElement('button');
  button.className = 'scroll-up-button hidden';
  const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('viewBox', '0 0 32 32');
  svgIcon.setAttribute('class', 'button-icon');

  const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${sprite}#icon-arrow`);
  svgIcon.appendChild(useElement);

  button.appendChild(svgIcon);

  button.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  document.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });

  document.body.appendChild(button);
}

scrollToTopButton();

export default scrollToTopButton;
