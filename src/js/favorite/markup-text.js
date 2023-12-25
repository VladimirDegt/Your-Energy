export function markupText() {
  const list = document.querySelector('.filter-list-js');
  list.classList.add('hidden-form');
  const parentEl = document.querySelector('.wrap-js')
  const subtitle = document.createElement('p');
  subtitle.className = 'favorite-text';
  parentEl.appendChild(subtitle);
  subtitle.textContent ="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."
}
