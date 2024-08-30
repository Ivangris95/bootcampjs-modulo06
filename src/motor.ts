import { partida } from "./modelo";
import {
  queHabriaPasado,
  mensajePlantarase,
  nuevaPartida,
  obtenerUrl,
  mostrarCarta,
  muestraPuntuacion,
  gestionarPartida,
} from "./ui";

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 11);
};

export const generarNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }
  if (numeroAleatorio === 0) {
    return numeroAleatorio + 1;
  }

  return numeroAleatorio;
};

export const obtenerPuntosCarta = (carta: number): number => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

export const sumarPuntuacion = (puntosCarta: number) => {
  return partida.puntuacion + puntosCarta;
};

export const actualizarPuntuacion = (nuevosPuntos: number) => {
  partida.puntuacion = nuevosPuntos;
};

export const handlePlantarseClick = () => {
  queHabriaPasado();
  mensajePlantarase();
  nuevaPartida();
};

export const manejarCartaNueva = (): number => {
  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrl(carta);
  mostrarCarta(urlCarta);
  return obtenerPuntosCarta(carta);
};

export const manejarPuntuacion = (puntosCarta: number) => {
  const puntosSumados = sumarPuntuacion(puntosCarta);
  actualizarPuntuacion(puntosSumados);
  muestraPuntuacion();
  gestionarPartida();
};

export const handleCompruebaClick = () => {
  const puntosCarta = manejarCartaNueva();
  manejarPuntuacion(puntosCarta);
};
