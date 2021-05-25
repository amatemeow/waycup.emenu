var call = document.getElementsByClassName("expandItem");
var i;

for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        var item = this.parentElement;
        item.classList.toggle("activeItem");
        // if (item.style.width === "47%") {
        //     item.style.width = "90%";
        // } else {
        //     item.style.width = "47%";
        // }
    });
}