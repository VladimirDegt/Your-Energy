class Loader {
  static loaderEl = document.querySelector('.js-loader');
  open() {

    if (!Loader.loaderEl || Loader.loaderEl.classList.contains('js-loader')) {
      Loader.loaderEl.style.display = 'block';
    }
  }
  close() {
    if (Loader.loaderEl) {
      Loader.loaderEl.style.display = 'none';
    }

  }
}

export const loader = new Loader();
