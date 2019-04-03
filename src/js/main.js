$(document).ready(function () {
    var menuActive = $('.menu__item_active')
    var menuItem = $('.menu__item')

    menuActive.click(function () {
        menuItem.slideToggle(800)
    })


    $('.menu__link').click(function () {
        var target = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    })

})