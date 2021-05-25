var call = document.getElementsByClassName("expandItem");
var i;

for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        var item = this.parentElement;
        item.classList.toggle("activeItem");
        var j;
        for (j = 0; j < call.length; j++) {
            if (call[j] !== this) {
                call.item(j).parentElement.classList.toggle("activeItem", false);
            }
        }
    });
}