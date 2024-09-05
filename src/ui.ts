import { partida } from "./modelo";
import { calcularMensajeAlPlantarse } from "./motor";

export const obtenerUrl = (carta: number): string => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

export const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLDivElement) {
    elementoPuntuacion.innerHTML = `Puntuación: ${partida.puntuacion}`;
  } else {
    console.error("muestraPuntuacion: No se a encontrado su ID");
  }
};

export const mostrarCarta = (urlCarta: string): void => {
  const carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLImageElement) {
    carta.src = urlCarta;
  }
};

export const nuevaPartida = () => {
  const elementoReset = document.getElementById("reset");
  if (elementoReset && elementoReset instanceof HTMLButtonElement) {
    elementoReset.style.display = "flex";
    elementoReset.addEventListener("click", () => {
      location.reload();
    });
  }
};

export const gameOver = () => {
  const elementoCarta = document.getElementById("dameCarta");
  const elementoPlantarse = document.getElementById("plantarse");
  if (
    elementoCarta &&
    elementoCarta instanceof HTMLButtonElement &&
    elementoPlantarse &&
    elementoPlantarse instanceof HTMLButtonElement
  ) {
    elementoCarta.disabled = true;
    elementoPlantarse.disabled = true;
  } else {
    console.error("elementoCarta: No se encontro el ID");
  }

  nuevaPartida();
};

export const mensajeFinal = (elemento: string) => {
  const elementoMensaje = document.getElementById("mensaje");

  if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.innerHTML = elemento;
  }
};

export const queHabriaPasado = () => {
  const elementoHabriaPasado = document.getElementById("habriaPasado");

  if (
    elementoHabriaPasado &&
    elementoHabriaPasado instanceof HTMLButtonElement
  ) {
    elementoHabriaPasado.style.display = "inline-block";
  }
};

const actualizarPlantarseDOM = (
  boton: HTMLButtonElement,
  mensaje: HTMLDivElement,
  nuevoMensaje: string
) => {
  boton.disabled = true;
  mensaje.innerHTML = nuevoMensaje;
};

export const mensajePlantarase = () => {
  const elementoCarta = document.getElementById("dameCarta");
  const elementoMensaje = document.getElementById("mensaje");

  if (
    elementoCarta &&
    elementoCarta instanceof HTMLButtonElement &&
    elementoMensaje &&
    elementoMensaje instanceof HTMLDivElement
  ) {
    const nuevoMensaje = calcularMensajeAlPlantarse(partida.puntuacion);
    actualizarPlantarseDOM(elementoCarta, elementoMensaje, nuevoMensaje);
  }
};
