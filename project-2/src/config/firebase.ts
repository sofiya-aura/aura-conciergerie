import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4IKm6yQmq4Vlb19QHWQYTghSgSzQeaZs",
  authDomain: "aura-conciergerie.firebaseapp.com",
  projectId: "aura-conciergerie",
  storageBucket: "aura-conciergerie.firebasestorage.app",
  messagingSenderId: "1011991270695",
  appId: "1:1011991270695:web:fc500861a6923a5177c502",
  measurementId: "G-DZH63Y46MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;