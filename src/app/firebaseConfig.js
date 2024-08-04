import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAsiyeC7L1R9Pd55uIn2caOgsO9XWx99R4',
  authDomain: 'pantry-management-3df84.firebaseapp.com',
  projectId: 'pantry-management-3df84',
  storageBucket: 'pantry-management-3df84.appspot.com',
  messagingSenderId: '410650791012',
  appId: '1:410650791012:web:9c7676ff4bc9386a292371',
  measurementId: 'G-EFEH9TSVKS',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
