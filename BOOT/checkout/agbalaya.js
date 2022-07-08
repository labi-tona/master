var button = document.querySelector("button");
var body = document.querySelector("body");
var eko = false

button.addEventListener("click", function() {
    setInterval(function () {
        if (eko) {
            body.style.backgroundColor = "white";
} else {
    body.style.backgroundColor = "red"
}
eko = !eko
    }, 2000);
})

var touch = document.querySelector(".number");
var brain = document.querySelector("#increase");
var i = 0
touch.addEventListener("click", function (){
   
i++
brain.innerHTML = i;
})
