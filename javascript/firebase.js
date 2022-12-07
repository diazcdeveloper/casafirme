  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
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
  const db = getDatabase();


const agendaId = document.getElementById("agenda-id");
const mes = document.getElementById("mes");
const coordinador = document.getElementById("coordinador");
const alabanza = document.getElementById("alabanza");
const ujier = document.getElementById("ujier");
const maestro = document.getElementById("maestro");
const btnAgregar = document.getElementById("btn-agregar");

const agendaIdShow = document.getElementById("agenda-id-show");
const mesShow = document.getElementById("mes-show");
const coordinadorShow = document.getElementById("coordinador-show");
const alabanzaShow = document.getElementById("alabanza-show");
const ujierShow = document.getElementById("ujier-show");
const maestroShow = document.getElementById("maestro-show");
const btnPublicar = document.getElementById("btn-publicar");

function insertData (){
    set(ref(db, "agenda/" + agendaId.value),{
        id: agendaId.value,
        mes: mes.value,
        coordinador: coordinador.value,
        alabanza: alabanza.value,
        ujier: ujier.value,
        maestro: maestro.value

    })
    .then(()=>{
        alert("agenda agregada!")
    })
    .catch((error)=>{
        alert(error)
    })
}

function findData (){
    const dbref = ref(db);

    get(child(dbref, "agenda/" + agendaIdShow.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            mesShow.innerHTML = snapshot.val().mes;
            coordinadorShow.innerHTML = snapshot.val().coordinador;
            alabanzaShow.innerHTML = snapshot.val().alabanza;
            ujierShow.innerHTML = snapshot.val().ujier;
            maestroShow.innerHTML = snapshot.val().maestro;
        }else{
            alert("no se encontró esa agenda");
        }
    })
    .catch((error)=>{
        alert(error)
    })

}


btnAgregar.addEventListener("click", insertData);
btnPublicar.addEventListener("click", findData);

