var rgbToHex = function() {
    var random1 = Math.ceil(Math.random() * 255);
    var random2 = Math.ceil(Math.random() * 255);
    var random3 = Math.ceil(Math.random() * 255);
    var hex1 = Number(random1).toString(16)
    var hex2 = Number(random2).toString(16)
    var hex3 = Number(random3).toString(16)
    if (hex1.length < 2) { hex1 = "0" + hex1; }
    if (hex2.length < 2) { hex2 = "0" + hex2; }
    if (hex3.length < 2) { hex3 = "0" + hex3; }
    return "#" + hex1 + hex2 + hex3;
};

window.addEventListener("click", function() {
    var randColor = rgbToHex()
    var bodyy = document.getElementsByTagName('body')[0];
    bodyy.style.backgroundColor = randColor;
});