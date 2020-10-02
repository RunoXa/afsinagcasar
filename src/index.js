import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
   apiKey: "AIzaSyBZrhDFpq3upwfPNEty8d8hb2xVRTmYE2Q",
   authDomain: "agcasar-f344b.firebaseapp.com",
   databaseURL: "https://agcasar-f344b.firebaseio.com",
   projectId: "agcasar-f344b",
   storageBucket: "agcasar-f344b.appspot.com",
   messagingSenderId: "1060853841139",
   appId: "1:1060853841139:web:8e3c7be9b112fa0a848b86",
   measurementId: "G-T9EGQ8SK66"
});

ReactDOM.render(
   <React.StrictMode>
      <App/>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
