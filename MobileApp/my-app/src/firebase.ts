import firebase from 'firebase/app';
import  'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAzd6RxMv6aVQks1g572SLIOSSJhiTboeQ",
    authDomain: "daily-moments-7d7e3.firebaseapp.com",
    projectId: "daily-moments-7d7e3",
    storageBucket: "daily-moments-7d7e3.appspot.com",
    messagingSenderId: "253584150093",
    appId: "1:253584150093:web:c6958f56e68266768e1604",
    measurementId: "G-JR5QJ94LQZ"
  };

  const app=firebase.initializeApp(firebaseConfig);
  export const auth=app.auth();