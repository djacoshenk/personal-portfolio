import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpZFTzti2aLhBt4uJgvLbqnSK5c-gYAVE',
  authDomain: 'personal-portfolio-fe.firebaseapp.com',
  projectId: 'personal-portfolio-fe',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
