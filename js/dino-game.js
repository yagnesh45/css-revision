var character = document.getElementById("character");
var block = document.getElementById("block");
var lostMessage = document.getElementById("lost-message");

lostMessage.style.display = "none";
function jump() {
    if (character.classList != "animate-jump") {
        character.classList.add("animate-jump");
    }
    setTimeout(function () {
        character.classList.remove("animate-jump");
    }, 500);
}

var checkCrash = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        lostMessage.style.display = "block";
        lostMessage.classList.add("animate-hari-gayo");
    }

}, 10);