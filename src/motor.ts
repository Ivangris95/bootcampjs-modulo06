import { Partida } from "./modelo";

export const generarNumeroAleatorio = (): number => {
  Partida.numeroAleatorio = Math.floor(Math.random() * 11);

  if (Partida.numeroAleatorio > 7) {
    Partida.numeroAleatorio += 2;
  } else if (Partida.numeroAleatorio === 0) {
    Partida.numeroAleatorio += 1;
  }
  return Partida.numeroAleatorio;
};

export const sumarPuntuacion = (numeroAleatorio: number) => {
  if (numeroAleatorio <= 7) {
    Partida.puntuacion += numeroAleatorio;
  } else {
    Partida.puntuacion += 0.5;
  }
};
