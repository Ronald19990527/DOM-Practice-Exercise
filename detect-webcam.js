export default function detectWebcam(webcam) {
    const $webcam = document.querySelector(webcam);

    if (navigator.mediaDevices.getUserMedia) {
        
    }
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then((stream) => {
        console.log(stream);
        $webcam.srcObject = stream;
        $webcam.play();
    }).catch((err) => {
        $webcam.insertAdjacentHTML("beforebegin", `<p>¡Sucedio el siguiente error!: <mark>${err}<mark/><p/>`);
        console.log(`¡Sucedio el siguiente error!: ${err}`);
    });
}