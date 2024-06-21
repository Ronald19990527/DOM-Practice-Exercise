export default function digitalGiveaway(programmingLanguageList, getWinner) {
    const $programmingLanguageList = document.querySelector(programmingLanguageList).children,
    $getWinner = document.querySelector(getWinner);

    function sortOut() {
        alert(`El ganador es ${$programmingLanguageList[Math.floor(Math.random() * $programmingLanguageList.length)].textContent}`);
    }

    $getWinner.addEventListener("click", (e) => {
        sortOut();
    });
}