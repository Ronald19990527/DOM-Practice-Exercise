export default function detectionDevices(userAgentInfo) {
    const $userAgentInfo = document.querySelector(userAgentInfo),
    isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: () => navigator.userAgent.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windows();
        },
    },
    isDesktop = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac os/i),
        windows: () => navigator.userAgent.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        },
    },
    isBrowser = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        safari: () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera|opera mini/i),
        ie: () => navigator.userAgent.match(/msie|iemobile/i),
        edge: () => navigator.userAgent.match(/edge/i),
        any: function() {
            return this.chrome() || 
            this.safari() || 
            this.firefox() || 
            this.opera() || 
            this.ie() || 
            this.edge();
        },
    };

    $userAgentInfo.innerHTML =`
        <ul>
            <li>User Agent: <b>${navigator.userAgent}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    /*Contenido exclusivo*/
    if(isBrowser.chrome()) {
        $userAgentInfo.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }

    if(isBrowser.firefox()) {
        $userAgentInfo.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
    }

    if(isDesktop.linux()) {
        $userAgentInfo.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    }

    if(isDesktop.mac()) {
        $userAgentInfo.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
    }

    if(isDesktop.windows()) {
        $userAgentInfo.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
    }

    /*Redirecciones*/
    if (isMobile.android()) {
        window.location.href = "https://jonmircha.com";
    }
}