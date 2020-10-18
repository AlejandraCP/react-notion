import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCjMk3gGYftx0AVKUWHVgx3oc78xRPFBpE",
    authDomain: "prueba-8358a.firebaseapp.com",
    databaseURL: "https://prueba-8358a.firebaseio.com",
    projectId: "prueba-8358a",
    storageBucket: "prueba-8358a.appspot.com",
    messagingSenderId: "876058746890",
    appId: "1:876058746890:web:a8013eed329b63ed3bbff3"

})

export {firebaseConfig as firebase}