import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

console.log('hello from index.js');

const firebaseConfig = {
    apiKey: "AIzaSyDMmqS-EKQLDXS-QlPe4BDsMNHG1kQgtLg",
    authDomain: "data-base-274e8.firebaseapp.com",
    projectId: "data-base-274e8",
    storageBucket: "data-base-274e8.appspot.com",
    messagingSenderId: "179433810078",
    appId: "1:179433810078:web:5b391751667a6a6cce338f",
    measurementId: "G-517Y9XKE0F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInForm = document.querySelector('.signin-form')
signInForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signInForm.email.value
    const password = signInForm.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log('user logged in:', user);
            onAuthStateChanged(auth, user => {
                if(user) {
                    window.location = 'indexLog.html';
                } else {
                    signInForm.reset()
                }
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorMessage)
            console.log(errorCode)
        });
})