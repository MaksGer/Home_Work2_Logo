var color
function generate_color() {
    function generate_random() {
        var random = Math.random() * 256;
        random = Math.floor(random);
        return random
    };
    var red = generate_random();
    var green = generate_random();
    var blue = generate_random();
    color ='rgb(' + red + ', ' + green + ', ' + blue +')'
    return color
}
generate_color();
 var element = document.getElementById("logo");
 element.style.backgroundColor = color;