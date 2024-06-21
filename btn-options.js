export default function btnOptions(options) {
  let digitalClock;

  document.addEventListener("click", (e) => {
    options.forEach(element => {
      if (e.target.matches(element)) {
        if (element === "#option-1") {
          document.querySelector(element).setAttribute("disabled", true);

          digitalClock = setInterval(() => {
            const $digitalClock = document.querySelector(".digital-clock");

            $digitalClock.innerHTML = new Date().toLocaleTimeString();
          }, 1000);

          return true;
        }
        else if (element === "#option-2") {
          document.querySelector("#option-1").removeAttribute("disabled");

          const $digitalClock = document.querySelector(".digital-clock");

          $digitalClock.innerHTML = "";

          clearInterval(digitalClock);

          return true;
        }
        else if (element === "#option-3") {
          document.querySelector(element).setAttribute("disabled", true);

          document.querySelector(".alarm").innerHTML = `<audio src="assets/emergency-alarm-with-reverb-29431.mp3" autoplay loop></audio>`;

          return true;
        }
        else if (element === "#option-4") {
          document.querySelector("#option-3").removeAttribute("disabled");

          document.querySelector(".alarm").innerHTML = ``;

          return true;
        }
      }
    })

    return false;
  });
}