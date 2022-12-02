import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhroS_IV7CrS3iHV47dBZPxJ4jcnVbCW8",
  authDomain: "ipesaude-storage.firebaseapp.com",
  projectId: "ipesaude-storage",
  storageBucket: "ipesaude-storage.appspot.com",
  messagingSenderId: "412493984391",
  appId: "1:412493984391:web:fc05886e98acffd52a3e22"
};

export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);

export const storage = getStorage(app)