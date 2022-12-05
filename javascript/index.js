
const hamburgerMenu = document.getElementById("hamburger-menu");
const midLine = document.getElementById("mid-line");
const topLine = document.getElementById("top-line");
const bottonLine = document.getElementById("botton-line");
const navBar = document.getElementById("navbar");
const body = document.getElementById("body");
const bottonDarkMode = document.getElementById("botton-darkmode")




const openMenu = ()=>{
    midLine.classList.toggle("hide");
    topLine.classList.toggle("open");
    bottonLine.classList.toggle("open");
    navBar.classList.toggle("open")
}

const darkModeOn = () => {
    body.classList.toggle("darkmode")
}


hamburgerMenu.addEventListener("click", openMenu);
bottonDarkMode.addEventListener("click", darkModeOn)