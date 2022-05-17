// la funcion del javascript es que cuando hagamos
// click ocurran todos los transform y transition hechos en el css
const panels = document.querySelectorAll(".panel");
// al poner el query selector ALL significa q eso va a devolver la lista
//entera de todos los elementos que cointengan la clase
// dicha dentro de los parentesis
function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
//con la funcion de arriba lo quye va aocurrir es que por cada poanels
//va a esperar por un click para que ocurra la funcion toggleOpen
