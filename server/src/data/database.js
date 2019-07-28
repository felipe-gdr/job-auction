const firebase = require('firebase/app');

require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDcN9nifHkkN91jofukrbK_CP9AjsLYJVI",
    authDomain: "job-auction.firebaseapp.com",
    databaseURL: "https://job-auction.firebaseio.com",
    projectId: "job-auction",
    storageBucket: "job-auction.appspot.com",
    messagingSenderId: "90395038131",
    appId: "1:90395038131:web:1d5a4db8e80baade"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

module.exports = database;
