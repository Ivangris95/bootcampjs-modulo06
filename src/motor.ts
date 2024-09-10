import { partida } from "./modelo";
import {
  queHabriaPasado,
  mensajePlantarase,
  nuevaPartida,
  obtenerUrl,
  mostrarCarta,
  muestraPuntuacion,
  mensajeFinal,
  disabledBotton,
} from "./ui";

const generarNumeroAleatorio = () => {
  partida.numeroAleatorio = Math.round(Math.random() * 11);
};

export const generarNumeroCarta = (): number => {
  if (partida.numeroAleatorio > 7) {
    return partida.numeroAleatorio + 2;
  }

  return partida.numeroAleatorio;
};

export const obtenerPuntosCarta = (carta: number): number => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

export const gestionarMensajePartida = (puntuacion: number): string => {
  if (puntuacion === partida.numeroParaGanar) {
    return "¡¡ Lo has clavado !! Enhorabuenea 🎖️ ";
  }
  if (puntuacion > partida.numeroParaGanar) {
    return "GAME OVER 💀. Intentalo otra vez.";
  }
  return "¿Continuar o plantarse? 🧐";
};

const gestionarPartida = () => {
  if (partida.puntuacion >= partida.numeroParaGanar) {
    disabledBotton();
  }
};

export const calcularMensajeAlPlantarse = (puntuacion: number): string => {
  if (puntuacion < 4) {
    return "Has sido muy conservador 🐔";
  } else if (puntuacion === 5) {
    return "Te ha entrado el cangelo 😰";
  } else {
    return "Casi, casi 👍";
  }
};

const sumarPuntuacion = (puntosCarta: number) => {
  return partida.puntuacion + puntosCarta;
};

const actualizarPuntuacion = (nuevosPuntos: number) => {
  partida.puntuacion = nuevosPuntos;
};

export const handlePlantarseClick = () => {
  queHabriaPasado();
  mensajePlantarase();
  nuevaPartida();
};

const manejarCartaNueva = (): number => {
  generarNumeroAleatorio();
  const carta = generarNumeroCarta();
  const urlCarta = obtenerUrl(carta);
  mostrarCarta(urlCarta);
  return obtenerPuntosCarta(carta);
};

const manejarPuntuacion = (puntosCarta: number) => {
  const puntosSumados = sumarPuntuacion(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
};

export const handleCompruebaClick = () => {
  const puntosCarta = manejarCartaNueva();
  manejarPuntuacion(puntosCarta);
  const elemento = gestionarMensajePartida(partida.puntuacion);
  mensajeFinal(elemento);
  gestionarPartida();
};
