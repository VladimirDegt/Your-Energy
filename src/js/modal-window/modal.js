export class Modal {
  constructor() {
    this.overlay = document.querySelector('.overlay');
    this.modal = document.querySelector('.modal-info');
    this.closeButton;

    this.closeButtonHandler = () => this.close();
    this.escapeKeyHandler = (event) => this.closeEsc(event);
    this.overlayClickHandler = (event) => this.closeBack(event);
    }

  open(content) {
    this.overlay.innerHTML = content;
    this.overlay.style.zIndex = 3;
    this.overlay.style.display = 'flex';
    this.modal.classList.remove("visually-hidden");
    this.closeButton = document.querySelector('.modal-button-close');

    document.body.classList.add('no-scroll')
    this.closeButton.addEventListener('click', this.closeButtonHandler);
    document.addEventListener('keydown', this.escapeKeyHandler);
    this.overlay.addEventListener('click', this.overlayClickHandler);
  }

  close() {
    this.modal = document.querySelector('.modal-info') || document.querySelector('.modal-get-raiting');
    this.overlay.style.display = 'none';
    this.overlay.style.zIndex = -1;
    this.modal.classList.add("visually-hidden");

    document.body.classList.remove('no-scroll')
    this.closeButton.removeEventListener('click', this.closeButtonHandler);
    document.removeEventListener('keydown', this.escapeKeyHandler);
    this.overlay.removeEventListener('click', this.overlayClickHandler);
  }

  closeEsc(event) {
    if (event.key === 'Escape') {
        this.close();
    }
  }

  closeBack(event) {
    if (event.target === this.overlay) {
        this.close()
    }
  }
}


export const myModal = new Modal();