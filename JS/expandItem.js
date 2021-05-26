var call = document.getElementsByClassName("expandItem");
var i;

function myReload(element) {
}

for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        var item = this.parentElement;
        item.classList.toggle("activeItem");
        //Code for debugging//
        // var isOverflowing = item.clientHeight < item.scrollHeight;
        // var width = 100;
        // var count = 0;
        // while (isOverflowing) {
        //     width--;
        //     item.style.width = width + "vw";
        //     myReload(item);
        //     isOverflowing = item.clientHeight < item.scrollHeight;
        //     item.classList.toggle(item.offsetHeight + "_" + item.scrollHeight
        //         + "-" + item.clientWidth + "_" + item.scrollWidth, 1);
        //     count++;
        //     if (count === 70) {
        //         break;
        //     }
        // }
        //end of section//
        var j;
        for (j = 0; j < call.length; j++) {
            if (call[j] !== this) {
                call.item(j).parentElement.classList.toggle("activeItem", false);
            }
        }
    });
}