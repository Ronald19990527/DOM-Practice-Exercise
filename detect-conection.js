export default function detectConection(online, showOnline) {
    function showConectedDisconected(message, backgroundColor) {
        const $online = document.getElementById(online);

        $online.innerHTML = message;
    
        $online.style.setProperty("background-color", backgroundColor);
    
        $online.classList.add(showOnline);
    
        setTimeout(() => {
            $online.classList.remove(showOnline);
        }, 3000);
    }

    function conectedDisconected() {
        if (navigator.onLine) {
            showConectedDisconected(`<h2>Conexión Reestablecida</h2>`, "#0f0");
        }
        else if (!navigator.onLine) {
            showConectedDisconected(`<h2>Conexión Perdida</h2>`, "#f00");
        }
    }

    window.addEventListener("online", () => conectedDisconected());
    window.addEventListener("offline", () => conectedDisconected());
}