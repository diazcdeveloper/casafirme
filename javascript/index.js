


const hamburgerMenu = document.getElementById("hamburger-menu");
const midLine = document.getElementById("mid-line");
const topLine = document.getElementById("top-line");
const bottonLine = document.getElementById("botton-line");
const navBar = document.getElementById("navbar");
const body = document.getElementById("body");

const modal = document.getElementById("modal-container");
const btnModal = document.getElementById("closed-modal");

const closedModal = () => {
    modal.classList.add("hide");
};

const openMenu = ()=>{
    midLine.classList.toggle("hide");
    topLine.classList.toggle("open");
    bottonLine.classList.toggle("open");
    navBar.classList.toggle("open");
};



hamburgerMenu.addEventListener("click", openMenu);
btnModal.addEventListener("click", closedModal)
modal.addEventListener("click", closedModal)
