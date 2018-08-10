window.onload = function () {


    var nav = document.querySelector('.nav');
    var nav_adaptive = document.querySelector('.nav_adaptive');


    nav_adaptive.onclick = function () {
        nav.classList.toggle('block')
    }

}