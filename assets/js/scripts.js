$(document).ready(function () {
    $('.menu-icon').on('click', function (evt) {
        $('.header-right').slideToggle();
        $(this).hide();
        $('.crose-icon').show()
    });
    $('.crose-icon').on('click', function (evt) {
        $('.header-right').slideToggle();
        $(this).hide();
        $('.menu-icon').show()
    });

});