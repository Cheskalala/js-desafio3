let currentColor = 'white'; 

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        currentColor = 'pink';
    } else if (event.key === 's') {
        currentColor = 'orange';
    } else if (event.key === 'd') {
        currentColor = 'cyan';
    } else if (event.key === 'q') {
        createNewDiv('purple');
    } else if (event.key === 'w') {
        createNewDiv('gray');
    } else if (event.key === 'e') {
        createNewDiv('saddleBrown');
    }

    document.getElementById('key').style.backgroundColor = currentColor;
});



function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '2px solid black';

    document.body.appendChild(newDiv);
}