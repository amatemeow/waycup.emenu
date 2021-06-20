var call = document.getElementsByClassName("expandItem");
var fakeBack = document.getElementById("fakeBack");
var i;


for (i = 0; i < call.length; i++) {
    call[i].addEventListener("click", function () {
        var item = this.parentElement;
        var name = this.parentElement.getElementsByClassName("itemName").item(0);
        console.log(name.className);
        item.classList.toggle("activeItem");
        name.classList.toggle("activeItemName");
        fakeBack.classList.toggle("toggleFakeBack");
    });
}

fakeBack.addEventListener("click", function () {
    fakeBack.classList.toggle("toggleFakeBack", false);
   for (i = 0; i < call.length; i++) {
       call.item(i).parentElement.classList.toggle("activeItem", false);
       call.item(i).parentElement.getElementsByClassName("itemName").item(0).classList.toggle("activeItemName", false)
   } 
});