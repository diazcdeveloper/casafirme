  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import {
    getFirestore,
    onSnapshot,
    doc,
    collection,
    deleteDoc,
    getDocs,
    getDoc,
    addDoc,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC9Sq_Yz1kgpEdMX45uTW3lhn-j1wGh7Nw",
    authDomain: "casa-firme-9e671.firebaseapp.com",
    databaseURL: "https://casa-firme-9e671-default-rtdb.firebaseio.com",
    projectId: "casa-firme-9e671",
    storageBucket: "casa-firme-9e671.appspot.com",
    messagingSenderId: "210141847596",
    appId: "1:210141847596:web:5bfb54d38dfc0f950d7189"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  export const agregarAgenda =() => addDoc(collection(db, 'agenda'),{
    mes: mes.value,
    coordinador: coordinador.value,
    alabanza: alabanza.value,
    ujier: ujier.value,
    maestro: maestro.value
  })

  export const listarAgenda = (callback) => onSnapshot(collection(db, 'agenda'), callback);

  export const eliminarAgenda  = (id) => deleteDoc(doc(db, 'agenda', id));

