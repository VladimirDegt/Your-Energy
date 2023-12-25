import iziToast from 'izitoast';

iziToast.settings({
  timeout: 3000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',

});

class Message {
  error(message) {
    iziToast.error({
      title: 'Error',
      message,
    });
  }

  success(message) {
    iziToast.success({
      title: 'OK',
      message,
    });
  }

  info(message) {
    iziToast.info({
      title: 'Info',
      message,
    });
  }
}

export const message = new Message();
