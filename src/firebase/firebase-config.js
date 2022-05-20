import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRuS_fb_VutU47_Qy9xCeVxXNj2haaafU',
  authDomain: 'fir-auth-blog-1907a.firebaseapp.com',
  projectId: 'fir-auth-blog-1907a',
  storageBucket: 'fir-auth-blog-1907a.appspot.com',
  messagingSenderId: '430785766956',
  appId: '1:430785766956:web:1efe69b19652c701551389',
  measurementId: 'G-1P02TTW1EV',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
