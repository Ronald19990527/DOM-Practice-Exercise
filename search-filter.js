export default function searchFilter(inputSearch) {
    document.getElementById(inputSearch).addEventListener("keyup", (e) => {
        if (e.key === "Backspace") {
            for (let index = 1; index <= 6; index++) {
                if (document.querySelector(`#card-${index} figcaption`).textContent.includes(document.getElementById(inputSearch).value) && document.querySelector(`#card-${index}`).classList.contains("dnone")) {
                    document.querySelector(`#card-${index}`).classList.remove("dnone");
                }
            }
        }
        else {
            for (let index = 1; index <= 6; index++) {
                if (!document.querySelector(`#card-${index} figcaption`).textContent.includes(document.getElementById(inputSearch).value) && !document.querySelector(`#card-${index}`).classList.contains("dnone")) {
                    document.querySelector(`#card-${index}`).classList.add("dnone");
                }
            }
        }
    });
}