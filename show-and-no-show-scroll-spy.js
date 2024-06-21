export default function showAndNoShowScrollSpy(scrollSpy, btnScrollSpy) {
    const $btnScrollSpy = document.querySelector(`.${btnScrollSpy}`),
    $scrollSpy = document.querySelector(`.${scrollSpy}`);

    $btnScrollSpy.addEventListener("click", e => {
        $scrollSpy.classList.toggle("show-scroll-spy");
    });
}