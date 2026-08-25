const menuBtn = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("ativo");

    menuBtn.classList.toggle("ativo");

});