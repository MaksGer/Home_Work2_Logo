let color;
let red;
let green;
let blue;

function makeRGB(a,b,c) {
    color = 'rgb(' + a + ', ' + b + ', ' + c +')';
    return color
}

function generateRandom() {
    let random = Math.random() * 256;
    random = Math.floor(random);
    return random;
}

function generateColor() {
    red = generateRandom();
    green = generateRandom();
    blue = generateRandom();
    makeRGB(red,green,blue);
}

function setColor() {
    let element = document.getElementById("logo");
    element.style.backgroundColor = color;
}

function onMouse() {
    generateColor();
    setColor();
}

function smartChange() {
    //let max = Math.max(red,green,blue);
    //Работаем с самой большой составляюшей, чтобы она не пересекла черту 255
    //if (max >= 230) {
    if (red > green) {
        if (red > blue) red -= 20; //red самая большая величина
        else blue -= 20; //blue самая большая величина
    } else {
        if (green > blue) green -= 20; // green самая большая величина
        else blue -= 20; // blue самая большая величина
    }

    //Работаем с самой маленькой составляющей чтобы она не опустилась ниже 0
    //let min = Math.min(red,green,blue);
    //if (min <= 30) {
    if (red < green) {
        if (red < blue) red += 19; //red самая маленькая величина
        else blue += 19; //blue самая маленькая величина
    } else {
        if (green < blue) green += 19; // green самая маленькая величина
        else blue += 19; // blue самая маленькая величина
    }


    makeRGB(red,green,blue);
    setColor();
    console.log (color);
}

function ticToc() {
    setTimeout(function () {
        setInterval(smartChange, 5000);
    })
    
}

onMouse();
ticToc();

