import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"

const config = {
    apiKey: "AIzaSyBIz6RZivu-b0qP2GAQWKMUqZxI4SqxOxc",
    authDomain: "chirps-eee28.firebaseapp.com",
    projectId: "chirps-eee28",
    storageBucket: "chirps-eee28.appspot.com",
    messagingSenderId: "807371278681",
    appId: "1:807371278681:web:256da6571c888797d56448",
    measurementId: "G-S3499H2FPT"


};
firebase.initializeApp(config);
export default firebase;