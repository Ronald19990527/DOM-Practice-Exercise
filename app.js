import btnOptions from "./btn-options.js";

import moveBall from "./move-ball.js";

import shortCuts from "./short-cuts.js";

import countdown from "./count-down.js";

import showBtnScroll from "./show-btn-scroll.js";

import darkLight from "./dark-light.js";

import darkLightLocalStorage from "./dark-light-local-storage.js";

import localStorageAvailable from "./local-storage-available.js";

import responsiveWithJavaScript from "./responsive-with-javascript.js";

import detectConection from "./detect-conection.js";

import detectWebcam from "./detect-webcam.js";

import detectGeolacation from "./detect-geolocation.js";

import searchFilter from "./search-filter.js";

import digitalGiveaway from "./digital-giveway.js";

import responsiveSlider from "./responsive-slider.js";

import showAndNoShowScrollSpy from "./show-and-no-show-scroll-spy.js";

import scrollSpy from "./scroll-spy.js";

import smartVideo from "./smart-video.js";

import form from "./form.js";

import voiceReader from "./voice-reader.js";

import detectionDevices from "./detection-devices.js";

((d) => {
  const $navigationMenu = d.querySelector(".navigation-menu"),
  $lineBlackFirstChild = d.querySelector(".button > .line-black:first-child"),
  $lineBlackLastChild = d.querySelector(".button > .line-black:last-child"),
  $lineBlackSecondChild = d.querySelector(".button > .line-black:nth-child(2)"); 
  let dia = "",
  mes = "",
  anio = "",
  hora = "",
  minutos = "",
  segundos = "",
  slash = 0,
  pages,
  responsive = window.matchMedia("(min-width: 1024px)");

  if (localStorageAvailable("localStorage")) {
    darkLightLocalStorage();
  }

  responsiveWithJavaScript(responsive, "#responsive");

  detectConection("online", "show-online");

  detectWebcam("#webcam");

  searchFilter("search-filter");

  digitalGiveaway("#programming-language-list", "#get-winner");

  responsiveSlider(".slide");

  scrollSpy(".section");

  showAndNoShowScrollSpy("scroll-spy", "btn-scroll-spy");

  smartVideo("section-12");

  form(".form > .input:not(:nth-of-type(3))", ".alert");

  voiceReader();

  detectionDevices(".user-agent-info");

  d.querySelector(".container-ball").innerHTML = `<div class="ball" style="position: relative; top: 40%; left: 45%;"></div>`;

  setInterval(() => {
    let fechaHora = new Date();

    for (let index = 0; index < fechaHora.toLocaleDateString().length; index++) {
      if (slash === 0 && fechaHora.toLocaleDateString()[index] != '/') {
        dia += fechaHora.toLocaleDateString()[index];
      }
      else if (slash === 1 && fechaHora.toLocaleDateString()[index] != '/') {
        mes += fechaHora.toLocaleDateString()[index];
      }
      else if (slash === 2) {
        anio += fechaHora.toLocaleDateString()[index];
      }
      else if (fechaHora.toLocaleDateString()[index] == '/') {
        slash++;
      }

      if (index === (fechaHora.toLocaleDateString().length - 1)) {
        hora = fechaHora.toLocaleTimeString().substring(0, 2);

        minutos = fechaHora.toLocaleTimeString().substring(3, 5);

        segundos = fechaHora.toLocaleTimeString().substring(6, 8);
      }
    }

    countdown(dia, mes, anio, hora, minutos, segundos, "#reset");
  }, 1000);

  showBtnScroll("#btn-scroll");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".button#btn-menu") || e.target.matches(".line-black") || e.target.matches(".navigation-menu li > a")) {
      $navigationMenu.classList.toggle("translate");

      $lineBlackFirstChild.classList.toggle("rotate-45-deg-positive");

      $lineBlackLastChild.classList.toggle("rotate-45-deg-negative");

      $lineBlackSecondChild.classList.toggle("none");

      if ($lineBlackFirstChild.classList.contains("rotate-45-deg-positive")) {
        d.body.style.setProperty("overflow-y", "hidden");
      }
      else {
        d.body.style.setProperty("overflow-y", "scroll");
      }
    }
    else {
      if (btnOptions(["#option-1", "#option-2", "#option-3", "#option-4"])) {
      }
      else if (e.target.matches(".container-ball")) {
        document.querySelector("body").style.overflowY = "hidden";

        document.querySelector(".container-ball").style.border = "thick solid blue";

        moveBall();
      }
      else if (e.target.matches("#btn-scroll") || e.target.matches(".arrow-up")) {
        window.scroll({
          top: 0,
          left: 100,
          behavior: "smooth",
        });
      }
      else if (e.target.matches("#dark-light.button") || e.target.matches(".moon") || e.target.matches(".sun")) {
        darkLight("#dark-light");
      }
      else if (e.target.matches("#open")) {
        pages = window.open(d.querySelector("#url").value, "_blank", `toolbar = yes, scrollbars = yes, resizable = yes, top = 500, left = 500, innerWidth = ${d.querySelector("#width").value}, innerHeight = ${d.querySelector("#height").value}`);
      }
      else if (e.target.matches("#close")) {
        pages.close();
      }
      else {
        document.querySelector("body").style.overflowY = "scroll";

        document.querySelector(".container-ball").style.border = "none";
      }
    }
  });

  d.addEventListener("keydown", (e) => {
    shortCuts(e);
  });

  responsive.addEventListener("change", (e) => responsiveWithJavaScript(responsive, "#responsive"));

  detectGeolacation("geolocation", "section-8");
})(document);