import { buscarPersonaje } from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nombre");
  const resultado = document.getElementById("resultado");
  const boton = document.getElementById("btn-buscar");

  boton.addEventListener("click", () => {
    const nombre = input.value.trim();
    buscarPersonaje(nombre, resultado);
  });
});
