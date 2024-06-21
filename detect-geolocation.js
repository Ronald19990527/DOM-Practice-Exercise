export default function detectGeolacation(geolocation, section7) {
    const $geolocation = document.getElementById(geolocation),
    $section7 = document.getElementById(section7),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function showPosition(position) {
        const $linkUbication = document.createElement("a");
        $linkUbication.setAttribute("href", `https://www.google.com/maps/@${11.2197632},${-74.1801984},20z`);
        $linkUbication.setAttribute("target", "_blank");
        $linkUbication.textContent = "Ver Ubicación";
        $linkUbication.style.setProperty("display", "block");
        $section7.insertAdjacentElement("beforeend", $linkUbication);

        $geolocation.innerHTML = `Latitud: ${position.coords.latitude}<br>Longitud: ${position.coords.longitude}<br>Presición: ${position.coords.accuracy}`;
    }

    function error(error) {
        $geolocation.innerHTML = `ERROR(${error.code}): ${error.message}`;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error, options);
    } else {
        $geolocation.innerHTML = `La geolocalización no se encuentra disponible para el navegador`;
    }
}