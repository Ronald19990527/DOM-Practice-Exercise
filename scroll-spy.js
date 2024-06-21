export default function scrollSpy(section) {
    const $sections = document.querySelectorAll(section);

    const observerOptions = {
        root: null,
        rootMargin: "0",
        threshold: []
    };

    const thresholdSets = new Array($sections.length);
    thresholdSets.fill([0, 1]);

    console.log(thresholdSets);
}