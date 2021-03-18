//inspirational mode

var mainView = document.getElementById('main');

function PreloadImage(src) {
    var img = new Image();
    img.src = src;
}

function toggleInsp() {
    if (localStorage.getItem("insp") === "insp_true") {
        localStorage.setItem('insp', "insp_false");
        mainView.classList.remove("insp");
        $(document.getElementsByClassName("card")).css({
            "border": "none"
        });
        console.log("set insp value to:",localStorage.getItem('insp'));
    } else {
        localStorage.setItem('insp', "insp_true");
        mainView.classList.add("insp");
        $(document.getElementsByClassName("card")).css({
            "border": "3px solid rgba(0,0,0,.25)"
        });
        console.log("set insp value to:",localStorage.getItem('insp'));
    }
}

(function () {
    if (localStorage.getItem('insp') === "insp_false") {
        mainView.classList.remove("insp");
        $(document.getElementsByClassName("card")).css({
            "border": "none"
        });
    } else {
        mainView.classList.add("insp");
        $(document.getElementsByClassName("card")).css({
            "border": "3px solid rgba(0,0,0,.25)"
        });
    }
    console.log("inspirational mode:",localStorage.getItem('insp'));
})();