export default function smartVideo(section12) {
    const $section12 = document.getElementById(section12),
    observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
    },
    observer = new IntersectionObserver(intersectionCallback, observerOptions);

    observer.observe($section12);

    function intersectionCallback(entry) {
        if(entry[0].isIntersecting) {
            entry[0].target.childNodes[5].play();

            document.addEventListener("visibilitychange", () => {
                if (document.hidden) entry[0].target.childNodes[5].pause();
                else entry[0].target.childNodes[5].play();
            });
        }
        else entry[0].target.childNodes[5].pause();
    }
}