$(document).ready( function(){

    $('.header__burger').click(function (event) {
            $('.header__burger, .menu-container__burger').toggleClass('active_b');
    })


    $('.nav-item a').click(function () {
        $('.header__burger, .menu-container__burger').toggleClass('active_b');
    })

});