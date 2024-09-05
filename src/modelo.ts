interface Partida {
  puntuacion: number;
  mensaje: string;
  numeroParaGanar: number;
  numeroAleatorio: number;
}

export const partida: Partida = {
  puntuacion: 0,
  mensaje: "",
  numeroParaGanar: 7.5,
  numeroAleatorio: 0,
};
