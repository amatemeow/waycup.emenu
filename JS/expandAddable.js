var call = document.getElementsByClassName("expandAddable");
var toggleSpecial = document.getElementsByClassName("toggleAddable");
var i;

for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        this.classList.toggle("activeAddable");
        var hidden = this.nextElementSibling;
        if (hidden.style.display === "flex") {
            hidden.style.display = "none";
        } else {
            hidden.style.display = "flex";
        }
    });
}