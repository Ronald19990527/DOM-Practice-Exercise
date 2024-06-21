var slides = 0;

export default function responsiveSlider(slide) {
    const $slide = document.querySelectorAll(slide);

    console.log($slide);

    slides = $slide.length - 1;

    document.addEventListener("click", e => {
        const moveSliderToTheRightAndToTheLeft = function(index1, index2) {
            $slide[index1].classList.remove("opacity-0");

            $slide[index2].classList.add("opacity-0");
        }

        if (e.target.matches(".right") || e.target.matches(".right > .bi-chevron-double-right"))
            if (slides === $slide.length - 1) {
                slides = 0;

                moveSliderToTheRightAndToTheLeft(slides, $slide.length - 1);
            }
            else {
                slides++;

                moveSliderToTheRightAndToTheLeft(slides, slides - 1);
            }
        else if (e.target.matches(".left") || e.target.matches(".left > .bi-chevron-double-left"))
            if (slides === 0) {
                slides = $slide.length - 1;

                moveSliderToTheRightAndToTheLeft(slides, 0);
            }
            else {
                slides--;

                moveSliderToTheRightAndToTheLeft(slides, slides + 1);
            }
    });
}