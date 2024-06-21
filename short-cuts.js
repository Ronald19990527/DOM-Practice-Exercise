export default function shortCuts(e) {
  if (e.key === "c" && e.altKey) {
    confirm("Estás ejecutando el shortcut del confirm");
  }
  else if (e.key === "p" && e.altKey) {
    prompt("Estás ejecutando el shortcut del prompt");
  }
  else if (e.key === "a" && e.altKey) {
    alert("Estás ejecutando el shortcut del alert");
  }
}