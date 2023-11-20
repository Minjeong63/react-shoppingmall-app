import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_9F2Nr_0_mpuKwiBotEQL68NIWxsL16Q',
  authDomain: 'react-shoppingmall-app.firebaseapp.com',
  projectId: 'react-shoppingmall-app',
  storageBucket: 'react-shoppingmall-app.appspot.com',
  messagingSenderId: '548665720890',
  appId: '1:548665720890:web:5587829e4d418ef1d0b503',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

// if (window.location.hostname === 'localhost') {
//   connectAuthEmulator(auth, 'http://127.0.0.1:3000');
// }

export const signUpEmail = (email, password) => {
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Create user with email and pass.
  createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
};

export const logInEmail = (email, password) => {
  if (auth.currentUser) {
    signOut(auth);
  } else {
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }
};

export const logOut = () => {
  if (auth.currentUser) {
    signOut(auth);
  }
};
