var call = document.getElementsByClassName("expandAddable");
var i;

for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        this.classList.toggle("activeAddable");
        var hidden = this.nextElementSibling;
        if (hidden.style.display === "flex") {
            hidden.style.display = "none";
            hidden.style.whiteSpace = "nowrap";
        } else {
            hidden.style.display = "flex";
            // setTimeout(function () {hidden.style.whiteSpace = "normal";}, 100);
            hidden.style.whiteSpace = "normal";
        }
    });
}