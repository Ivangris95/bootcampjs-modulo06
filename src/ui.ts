import { Partida } from "./modelo";
import { generarNumeroAleatorio, sumarPuntuacion } from "./motor";

export const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Puntuación: ${Partida.puntuacion}`;
  } else {
    console.error("muestraPuntuacion: No se a encontrado su ID");
  }
};

export const mostrarCarta = (numeroAleatorio: number): void => {
  const carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLImageElement) {
    switch (numeroAleatorio) {
      case 1:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        carta.alt = "As de copas";
        break;
      case 2:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        carta.alt = "2 de copas";
        break;
      case 3:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        carta.alt = "3 de copas";
        break;
      case 4:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        carta.alt = "4 de copas";
        break;
      case 5:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        carta.alt = "5 de copas";
        break;
      case 6:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        carta.alt = "6 de copas";
        break;
      case 7:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        carta.alt = "7 de copas";
        break;
      case 10:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        carta.alt = "Sota de copas";
        break;
      case 11:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        carta.alt = "Caballo de copas";
        break;
      case 12:
        carta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        carta.alt = "Rey de copas";
        break;
    }
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
  let mensaje = "";

  if (Partida.puntuacion > 7.5) {
    if (
      elementoCarta &&
      elementoCarta instanceof HTMLButtonElement &&
      elementoPlantarse &&
      elementoPlantarse instanceof HTMLButtonElement
    ) {
      elementoCarta.disabled = true;
      elementoPlantarse.disabled = true;

      mensaje = "GAME OVER 💀";
    } else {
      console.error("elementoCarta: No se encontro el ID");
    }
    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
      elementoMensaje.innerHTML = mensaje;
    }
    nuevaPartida();
  }
};

export const habriaPasado = () => {
  const elementoHabriaPasado = document.getElementById("habriaPasado");

  if (
    elementoHabriaPasado &&
    elementoHabriaPasado instanceof HTMLButtonElement
  ) {
    elementoHabriaPasado.style.display = "inline-block";
  }
};

export const handlePlantarseClick = () => {
  const elementoCarta = document.getElementById("dameCarta");

  if (elementoCarta && elementoCarta instanceof HTMLButtonElement) {
    elementoCarta.disabled = true;

    if (Partida.puntuacion < 4) {
      Partida.mensaje = "Has sido muy conservador 🐔";
    } else if (Partida.puntuacion === 5) {
      Partida.mensaje = "Te ha entrado el cangelo 😰";
    } else if (Partida.puntuacion === 7.5) {
      Partida.mensaje = "¡¡ Lo has clavado !! Enhorabuenea 🎖️ ";
    } else {
      Partida.mensaje = "Casi, casi 👍";
    }

    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje) {
      elementoMensaje.innerHTML = Partida.mensaje;
    }
    nuevaPartida();
    habriaPasado();
  }
};

export const handleCompruebaClick = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  mostrarCarta(numeroAleatorio);
  sumarPuntuacion(numeroAleatorio);
  muestraPuntuacion();
  gameOver();
};
