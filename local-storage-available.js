export default function localStorageAvailable(type) {
  try {
    var localStorage = window[type],
    x = "__storage_test__";

    localStorage.setItem(x, x);

    localStorage.removeItem(x);

    return true;
  } catch (error) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
}