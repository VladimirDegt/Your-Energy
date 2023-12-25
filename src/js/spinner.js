import { Spinner } from 'spin.js';

const spinnerContainer = document.createElement('div');
spinnerContainer.id = 'spinner-container';
document.body.appendChild(spinnerContainer);

const opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 3, // The line thickness
  radius: 30, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#f4f4f4', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const target = document.getElementById('spinner-container');
const spinner = new Spinner(opts);

export function showSpinner() {
  target.style.display = 'flex';
  spinner.spin(target);
}

export function hideSpinner() {
  spinner.stop();
  target.style.display = 'none';
}

// How to Use Spinner
// 1. Import spinner to your js file. (Don't forget about relative path)
// import { showSpinner, hideSpinner } from './js/spinner';
//2. Call showSpinner() in your req func
//3. Call hideSpinner() in .finally (in .then.finally chaining method) or finally{} block if use try-catch block
