import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyDuF6svCOgt0d6s13i-I13SuoOszdmMr94",
    authDomain: "smartframejulio.firebaseapp.com",
    databaseURL: "https://smartframejulio.firebaseio.com",
    projectId: "smartframejulio",
    storageBucket: "smartframejulio.appspot.com",
    messagingSenderId: "288062846458",
    appId: "1:288062846458:web:6bf8fa7c2c3d4eb30d2043"
  };
 firebase.initializeApp(firebaseConfig)

 export default firebase