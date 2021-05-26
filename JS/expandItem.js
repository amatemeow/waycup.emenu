var call = document.getElementsByClassName("expandItem");
var fakeBack = document.getElementById("fakeBack");
var i;


for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        var item = this.parentElement;
        item.classList.toggle("activeItem");
        fakeBack.classList.toggle("toggleFakeBack");
    });
}

fakeBack.addEventListener("click", function () {
    fakeBack.classList.toggle("toggleFakeBack", false);
   for (i = 0; i < call.length; i++) {
       call.item(i).parentElement.classList.toggle("activeItem", false);
   } 
});