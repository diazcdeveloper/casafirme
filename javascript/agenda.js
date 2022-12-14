import { listarAgenda } from "./firebase.js";

const formAdmin = document.getElementById("admin-form");

formAdmin.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("user");
  const usuario = "casafirme";

  if (user.value === usuario) {
    location = "admin.html";
    console.log("esta logueado");
  } else {
    location = "agenda.html";
    console.log("es diferente");
  }

  formAdmin.reset();
});

// const agendaForm = document.getElementById("agenda-form");
const mes = document.getElementById("mes");
const coordinador = document.getElementById("coordinador");
const alabanza = document.getElementById("alabanza");
const ujier = document.getElementById("ujier");
const maestro = document.getElementById("maestro");
const btnAgregar = document.getElementById("btn-agregar");

const agendaContainer = document.getElementById("agenda-container");

window.addEventListener("DOMContentLoaded", (e) => {
  listarAgenda((querySnapshot) => {
    agendaContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const agenda = doc.data();

      agendaContainer.innerHTML += `
            <div class="card-content">
                <div class="mes">Mes: <span id="mes-show">${agenda.mes}</span></div>
                <div class="coordinador">Coordinador:<span id="coordinador-show">${agenda.coordinador}</span></div>
                <div class="alabanza">Director Alabanza:<span id="alabanza-show">${agenda.alabanza}</span></div>
                <div class="ujier">Ujier: <span id="ujier-show">${agenda.ujier}</span>
                </div>
                <div class="maestro">Maestro: <span id="maestro-show">${agenda.maestro}</span>
            </div>
            </div>
            `;
    });
  });
});

// agendaForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const mes = agendaForm["mes"];
//   const coordinador = agendaForm["coordinador"];
//   const alabanza = agendaForm["alabanza"];
//   const ujier = agendaForm["ujier"];
//   const maestro = agendaForm["maestro"];

//   console.log(mes.value)

//   agregarAgenda(
//     mes.value,
//     coordinador.value,
//     alabanza.value,
//     ujier.value,
//     maestro.value
//   );

//   agendaForm.reset();
// });
