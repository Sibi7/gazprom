/*=================================================================
/ header progress bar
=================================================================*/
function move() {
    var elem = document.getElementById("headerBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
window.onload = function () {
    move();
};
/*=================================================================
/ close header progress bar
=================================================================*/

