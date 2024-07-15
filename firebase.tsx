import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7ZbWq2tR6Bi8H_SiQyu40wvSrumoplKw",
  authDomain: "masala-8df83.firebaseapp.com",
  projectId: "masala-8df83",
  storageBucket: "masala-8df83.appspot.com",
  messagingSenderId: "308760362052",
  appId: "1:308760362052:android:8d0917a37aa576fec91011",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
