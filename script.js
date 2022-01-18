
document.addEventListener("keypress", function (e) {
    if (e.keyCode === 32) {
        let element = document.getElementsByClassName( "name" )[0];

        element.parentNode.removeChild(element);
    }
})
