import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
   apiKey: "AIzaSyBZrhDFpq3upwfPNEty8d8hb2xVRTmYE2Q",
   authDomain: "agcasar-f344b.firebaseapp.com",
   databaseURL: "https://agcasar-f344b.firebaseio.com",
   projectId: "agcasar-f344b",
   storageBucket: "agcasar-f344b.appspot.com",
   messagingSenderId: "1060853841139",
   appId: "1:1060853841139:web:8e3c7be9b112fa0a848b86",
   measurementId: "G-T9EGQ8SK66"
});

export default app;