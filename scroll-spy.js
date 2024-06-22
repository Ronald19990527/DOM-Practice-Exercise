var itemIndex = 0;

export default function scrollSpy(section) {
    const $sections = document.querySelectorAll(section),
    observers = new Array($sections.length);

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: []
    };

    const thresholdSets = new Array($sections.length);
    thresholdSets.fill(0.6);

    for (let index = 0; index < $sections.length; index++) {
        observerOptions.threshold = thresholdSets[index];

        observers[index] = new IntersectionObserver(intersectionCallback, observerOptions,);

        observers[index].observe($sections[index]);
    }

    function intersectionCallback(entries) {
        const $itemsScrollSpy = document.querySelectorAll(".item-scroll-spy");
        entries.forEach((entry) => {
            console.log(entry.target.classList[1]);

            $itemsScrollSpy.forEach(element => {
                if (element.classList.contains(entry.target.classList[1]) && !element.classList.contains("item-active")) element.classList.add("item-active");
                else element.classList.remove("item-active");
            });
        });
    }
}