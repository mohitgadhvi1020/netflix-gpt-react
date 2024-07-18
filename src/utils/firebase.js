// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0yPif90mDJBMctD5mLJ1ENj63YNcxIKg',
  authDomain: 'netflixgpt-88005.firebaseapp.com',
  projectId: 'netflixgpt-88005',
  storageBucket: 'netflixgpt-88005.appspot.com',
  messagingSenderId: '559906030533',
  appId: '1:559906030533:web:70ea975778f55ce0e541ac',
  measurementId: 'G-BK3Q7SLVJD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
