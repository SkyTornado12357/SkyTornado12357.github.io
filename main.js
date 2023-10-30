var element = document.getElementById("Home");
element.style.opacity = 0;
var text = element.innerText;
var speed = 300; // Typing speed in milliseconds

function typeText(index) {
    if(element.style.opacity == 0){
        element.style.opacity = 1;
        element.innerText = "";
    }
    
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
            typeText(index);
        }, speed);
    }
}


setTimeout(function() {
    typeText(0);
}, speed);