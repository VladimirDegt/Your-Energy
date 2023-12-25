// import { FieldPath, doc, updateDoc } from "firebase/firestore";
import { collection, doc, setDoc, deleteDoc, getDocs } from 'firebase/firestore';
// import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from '../../../firebase';

export const updateFirestore = async card => {
  const user = auth.currentUser;
  if (user) {
    const docData = card;
    try {
      setDoc(doc(db, user.email, card._id), docData);
    } catch (er) {
      console.log(er.message);
    }
  }
  if (!user) {
    return;
  }
};

export const deleteFavorites = async id => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      deleteDoc(doc(db, user, id));
    } catch (er) {
      console.log(er.message);
    }
  }
  if (!user) {
    return;
  }
};

export const listOfFavorites = async () => {
  const user = localStorage.getItem('user');

  const favorites = [];

  if (!user) return;

  const querySnapshot = await getDocs(collection(db, user));
  // const querySnapshot = getDocs(collection(db, user.email));

  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots

    favorites.push(doc.data());
  });

  localStorage.setItem('favorites', JSON.stringify(favorites));
};
