var call = document.getElementsByClassName("expandButton");
var toggleSpecial = document.getElementsByClassName("toggleSpecial");
var i;

for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
       this.classList.toggle("active");
       var hidden = this.nextElementSibling;
       if (hidden.style.display === "flex") {
           hidden.style.display = "none";
           toggleSpecial.item(0).style.width = "auto";
           toggleSpecial.item(0).style.maxWidth = "35em";
       } else {
           hidden.style.display = "flex";
           toggleSpecial.item(0).style.width = "95%";
           toggleSpecial.item(0).style.maxWidth = "100%";
       }
    });
}