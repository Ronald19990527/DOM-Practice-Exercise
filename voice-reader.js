export default function voiceReader() {
    const $voices = document.querySelector(".voice-reader-information > .voices"),
    $textToRead = document.querySelector(".voice-reader-information > .text-to-read"),
    $readText = document.querySelector(".read-text");

    let synth = window.speechSynthesis,
    voices = [];

    getVoicesList();

    if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = getVoicesList;

    function getVoicesList() {
        voices = synth.getVoices();

        const $option = document.createElement("option");

        $option.textContent += "--- Elige una voz ---";

        $voices.appendChild($option);

        for (let index = 0; index < voices.length; index++) {
            const $option = document.createElement("option");

            $option.textContent = voices[index].name + " - " + voices[index].lang;

            $option.setAttribute("data-name", voices[index].name);

            $option.setAttribute("data-lang", voices[index].lang);

            $voices.appendChild($option);
        }
    }

    $readText.addEventListener("click", e => {
        let utterThis = new SpeechSynthesisUtterance($textToRead.value),
        selectedOption = $voices.selectedOptions[0].getAttribute("data-name");

        for (let index = 0; index < voices.length; index++) {
            if (voices[index].name === selectedOption) {
                utterThis.voice = voices[index];

                synth.speak(utterThis);

                return;
            }
        }
    })
}