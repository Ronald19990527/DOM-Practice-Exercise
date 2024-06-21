let mostrarTemporizador = true,
backgroundMain1,
backgroundMain2,
backgroundMain3;

export default function countdown(dia, mes, anio, hora, minutos, segundos, reset) {
  const $reset = document.querySelector(reset),
  $main = document.querySelector(".main");
  let diasTranscurridos = 0,
  numeroMaximoDeDias = "",
  esBisiesto = true;

  if ((parseInt(anio) % 100 != 0 && parseInt(anio) % 4 === 0) || parseInt(anio) % 400 === 0) {
    numeroMaximoDeDias = "366";
  }
  else {
    numeroMaximoDeDias = "365";

    esBisiesto = false;
  }

  for (let index = 1; index < parseInt(mes); index++) {
    if (index <= 7) {
      if (index % 2 != 0) {
        diasTranscurridos += 31;
      }
      else if (index % 2 === 0 && index != 2) {
        diasTranscurridos += 30;
      }
      else if (index === 2) {
        if (esBisiesto) {
          diasTranscurridos += 29;
        }
        else {
          diasTranscurridos += 28;
        }
      }
    }
    else {
      if (index % 2 != 0) {
        diasTranscurridos += 30;
      }
      else if (index % 2 === 0) {
        diasTranscurridos += 31;
      }
    }
  }

  diasTranscurridos += parseInt(dia) - 1;

  if ((numeroMaximoDeDias - diasTranscurridos) === 294 && (24 - parseInt(hora) - 1) === 4 && (60 - minutos) === 31 && (60 - segundos) === 30) {
    document.querySelector(".countdown").innerHTML = `Feliz Año Nuevo`;

    $reset.classList.remove("dnone");

    mostrarTemporizador = false;

    backgroundMain1 = setInterval(() => {
      $main.style.setProperty("background-color", "#121223");
    }, 1000);

    backgroundMain3 = setInterval(() => {
      $main.style.setProperty("background-color", "#666600");
    }, 2000);

    backgroundMain2 = setInterval(() => {
      $main.style.setProperty("background-color", "#006666");
    }, 3000);
  }
  else if (mostrarTemporizador) {
    mostrarConteoRegresivo(numeroMaximoDeDias, diasTranscurridos, hora, minutos, segundos);
  }

  document.addEventListener("click", (e) => {
    if (e.target.matches("#reset")) {
      clearInterval(backgroundMain1);

      clearInterval(backgroundMain2);

      clearInterval(backgroundMain3);

      mostrarTemporizador = true;

      mostrarConteoRegresivo(numeroMaximoDeDias, diasTranscurridos, hora, minutos, segundos);

      $reset.classList.add("dnone");

      $main.style.setProperty("background-color", "#fff");
    }
  })
}

function mostrarConteoRegresivo(numeroMaximoDeDias, diasTranscurridos, hora, minutos, segundos) {
  document.querySelector(".countdown").innerHTML = `${numeroMaximoDeDias - diasTranscurridos} ${(numeroMaximoDeDias - diasTranscurridos) != 1 ? `días` : `día`} ${24 - parseInt(hora) - 1} ${(24 - parseInt(hora) - 1) != 1 ? `horas` : `hora`} ${60 - minutos} ${(60 - minutos) != 1 ? `minutos` : `minuto`} ${60 - segundos} ${(60 - segundos) != 1 ? `segundos` : `segundo`}`;
}