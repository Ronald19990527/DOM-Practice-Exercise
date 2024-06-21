export function setRegisterDarkLight(setClassDark) {
  localStorage.setItem("setClassDark", JSON.stringify(setClassDark))
}

export function getRegisterDarkLight() {
  return JSON.parse(localStorage.getItem("setClassDark"));
}