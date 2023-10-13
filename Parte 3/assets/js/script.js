function pintar(element, color) {
    console.log(color);
    element.style.backgroundColor = color;
}

const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");



rojo.addEventListener("click", function () {
    pintar(rojo, 'black');
    });

azul.addEventListener("click", function () {
    pintar(azul, 'black');
    });

verde.addEventListener("click", function () {
    pintar(verde, 'black');
    });

amarillo.addEventListener("click", function () {
    pintar(amarillo, 'black');
    });