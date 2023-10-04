

var handleNavbar = function () {
    var trigger = $('.js__trigger'),
        mainNavbar = $('.js__main-navbar');

    trigger.on('click', function () {
        trigger.toggleClass('-is-active');
        mainNavbar.toggleClass('-is-open');
    })
}




$(document).ready(function () {
    handleNavbar();
});

