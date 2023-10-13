
// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


function pintar(element, color = 'green') {
    console.log(color);
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

pintar(ele)

ele.addEventListener("click", function () {
    pintar(ele, 'yellow');
    });