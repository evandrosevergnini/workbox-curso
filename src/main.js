import { soma } from "./assets/js/calculadora";
import "./assets/scss/main.scss";
import LogoWorkbox from "./assets/images/logo-workbox.png";

const inputs = document.querySelectorAll("input");
const a = inputs[0];
const b = inputs[1];
const resultado = document.getElementById("resultado");
const btnSoma = document.getElementById("btnSoma");
btnSoma.addEventListener("click", function () {
  resultado.textContent = soma(a.value, b.value);
});

// Manipulando imagem como um módulo
const logoWorkbox = new Image();
logoWorkbox.src = LogoWorkbox;
document.querySelector("header h1").appendChild(logoWorkbox);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js")
  });
}