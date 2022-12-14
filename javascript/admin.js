import { agregarAgenda, listarAgenda, eliminarAgenda } from "./firebase.js";

const agendaContainerAdmin = document.getElementById("agenda-container-admin");

window.addEventListener("DOMContentLoaded", (e) => {
  listarAgenda((querySnapshot) => {
    agendaContainerAdmin.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const agenda = doc.data();

      agendaContainerAdmin.innerHTML += `
  
              <div class="card-content">
                  <div class="mes">Mes: <span id="mes-show">${agenda.mes}</span></div>
                  <div class="coordinador">Coordinador:<span id="coordinador-show">${agenda.coordinador}</span></div>
                  <div class="alabanza">Director Alabanza:<span id="alabanza-show">${agenda.alabanza}</span></div>
                  <div class="ujier">Ujier: <span id="ujier-show">${agenda.ujier}</span></div>
                  <div class="maestro">Maestro: <span id="maestro-show">${agenda.maestro}</span>
              </div>
                  <button class="btn-eliminar" id="btn-eliminar" data-id="${doc.id}">Eliminar</button>
  
              `;
    });

    const btnsEliminar = agendaContainerAdmin.querySelectorAll(".btn-eliminar");
    btnsEliminar.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await eliminarAgenda(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );
  });
});


const agendaForm = document.getElementById("agenda-form");


agendaForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const mes = agendaForm["mes"];
    const coordinador = agendaForm["coordinador"];
    const alabanza = agendaForm["alabanza"];
    const ujier = agendaForm["ujier"];
    const maestro = agendaForm["maestro"];
  
    console.log(mes.value)
  
    agregarAgenda(
      mes.value,
      coordinador.value,
      alabanza.value,
      ujier.value,
      maestro.value
    );
  
    agendaForm.reset();
  });
  