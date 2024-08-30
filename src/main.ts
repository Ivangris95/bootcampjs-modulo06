import { handleCompruebaClick, handlePlantarseClick } from "./motor";
import { muestraPuntuacion } from "./ui";

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const pedirCarta = document.getElementById("dameCarta");
if (pedirCarta) {
  pedirCarta.addEventListener("click", handleCompruebaClick);
}

const plantarse = document.getElementById("plantarse");
if (plantarse) {
  plantarse.addEventListener("click", handlePlantarseClick);
}

const prueba = document.getElementById("habriaPasado");
if (prueba) {
  prueba.addEventListener("click", handleCompruebaClick);
}
