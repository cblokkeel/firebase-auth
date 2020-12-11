import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdvuj7Pr84DVA2XtE4lURIBe-S0E3bqvk",
    authDomain: "login-a4418.firebaseapp.com",
    projectId: "login-a4418",
    storageBucket: "login-a4418.appspot.com",
    messagingSenderId: "689431193588",
    appId: "1:689431193588:web:06c623686d55db1f86bba1"
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire