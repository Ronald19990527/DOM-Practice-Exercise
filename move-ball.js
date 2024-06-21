let moveX = parseFloat(45),
moveY = parseFloat(40);

export default function moveBall() {
  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        if (parseFloat(document.querySelector(".ball").style.top) > 0.2 && document.body.getAttribute("style") != null && document.body.style.overflowY == "hidden") {
          moveY -= 0.2;

          move(moveX, moveY);
        }

        break;

      case "ArrowRight":
        if (parseFloat(document.querySelector(".ball").style.left) < 94.2 && document.body.getAttribute("style") != null && document.body.style.overflowY == "hidden") {
          moveX += 0.2;

          move(moveX, moveY);
        }

        break;

      case "ArrowDown":
        if (parseFloat(document.querySelector(".ball").style.top) < 78.2 && document.body.getAttribute("style") != null && document.body.style.overflowY == "hidden") {
          moveY += 0.2;

          move(moveX, moveY);
        }

        break;

      case "ArrowLeft":
        if (parseFloat(document.querySelector(".ball").style.left) > 0 && document.body.getAttribute("style") != null && document.body.style.overflowY == "hidden") {
          moveX -= 0.2;

          move(moveX, moveY);
        }

        break;

      default:
        break;
    }
  });

  function move(moveX, moveY) {
    document.querySelector(".container-ball").innerHTML = ``;

    document.querySelector(".container-ball").innerHTML = `<div class="ball" style="position: relative; top: ${moveY}%; left: ${moveX}%;"></div>`;
  }
}