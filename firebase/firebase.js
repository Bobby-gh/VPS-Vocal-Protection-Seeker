// import * as firebase from 'firebase';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {auth} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBXrR-VyOYOR8Y02Cla5igwgvpyLVr9FdM",
  authDomain: "vocal-protection-seeker-1.firebaseapp.com",
  projectId: "vocal-protection-seeker-1",
  storageBucket: "vocal-protection-seeker-1.appspot.com",
  messagingSenderId: "63383565184",
  appId: "1:63383565184:web:3ff0002bd5f176a7440765",
  measurementId: "G-8VFTHK4HC2"
};

const app  = initializeApp(firebaseConfig);

//export const db = getFirestore(app)
//export default getFirestore(app);




