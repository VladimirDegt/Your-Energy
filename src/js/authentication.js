import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { listOfFavorites } from './utils/firebase';
import { addContent } from './favorite/favorite';
const provider = new GoogleAuthProvider();

const SingIn = document.getElementById('sign-in');
const SignOut = document.getElementById('sign-out');
const User = document.getElementById('user');
User.innerHTML = localStorage.getItem('user');
const currentUrl = window.location.href.toString();

if (localStorage.getItem('user')) {
  SignOut.classList.remove('display-none');
  SingIn.classList.add('display-none');
  SingIn.style.display = 'none';
}
export const googleSignin = async () => {
  await signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

      localStorage.user = user.email;
      User.innerHTML = localStorage.getItem('user');
      SignOut.classList.remove('display-none');
      SingIn.classList.add('display-none');

      SingIn.style.display = 'none';
      listOfFavorites();
      // addContent();
    })
    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage)
      const credential = GoogleAuthProvider.credentialFromError(error);

    });
};
export const logOut = async () => {
  await signOut(auth)
    .then(() => {
      User.innerHTML = '';
      localStorage.removeItem('user');

      let part = currentUrl.slice(-14);

      if (part === favorites.html) {
        addContent();
      }
    })
    .catch(error => {
      console.log(error.message); // An error happened.
    });
  SignOut.classList.add('display-none');
  SingIn.classList.remove('display-none');
  SingIn.style.display = 'flex';
  localStorage.removeItem('favorites');
};

SingIn.addEventListener('click', googleSignin);
SignOut.addEventListener('click', logOut);

