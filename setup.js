import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app'
import React from 'react';

const firebaseConfig ={
    apiKey: "AIzaSyDc9x0lK3aSfo_Xv-qqST-J47AhskIVWBQ",
    authDomain: "trilluxo-app.firebaseapp.com",
    projectId: "trilluxo-app",
    storageBucket: "trilluxo-app.appspot.com",
    messagingSenderId: "572991933340",
    appId: "1:572991933340:web:35f7ca3a0a349620405659",
    measurementId: "G-PE4D2WKZTW"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default () => {
    return{firebase,auth};
};