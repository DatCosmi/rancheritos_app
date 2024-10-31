// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Configuración de Firebase (obtén esta configuración de la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAfMm946-uuGIm0CfoMsjE9GdjIlMaJ7NE",
  authDomain: "rancheritosapp.firebaseapp.com", // Asegúrate de que este sea correcto
  projectId: "rancheritosapp",
  storageBucket: "rancheritosapp.appspot.com", // Corrige el URL del bucket
  messagingSenderId: "778676238861", // Usa el project_number como senderId
  appId: "1:778676238861:android:e41efbadfae86426e2b344",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
