let menuBar = document.querySelector(".menuBar");
let sideBar = document.querySelector("nav");

menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("sideBar");
});