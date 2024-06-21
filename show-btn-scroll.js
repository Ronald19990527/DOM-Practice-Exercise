export default function showBtnScroll(showBtnScroll) {
  const $btnScroll = document.querySelector(showBtnScroll);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 800) {
      $btnScroll.classList.remove("opacity-0");
    }
    else {
      $btnScroll.classList.add("opacity-0");
    }
  });
}