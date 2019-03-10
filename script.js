let color;
function generateColor() {
    function generateRandom() {
        let random = Math.random() * 256;
        random = Math.floor(random);
        return random;
    }

    let red = generateRandom();
    let green = generateRandom();
    let blue = generateRandom();
    color ='rgb(' + red + ', ' + green + ', ' + blue +')';
    return color;
}

function onMouse() {
    generateColor();
    let element = document.getElementById("logo");
    element.style.backgroundColor = color;
}

onMouse();