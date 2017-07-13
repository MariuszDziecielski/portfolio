$(function () {
    var $listItems = $('header li');
    $listItems.each(function (index, elem) {
        $(elem).click(function () {
            $listItems.removeClass('active');
            $(elem).addClass('active');
        });
    });
    $('.navbar-collapse a').click(function () {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-toggle').click();
        }
    });
    $('.navbar-nav li a').each(function (index, elem) {
        $(elem).click(function () {
            var href = $(elem).attr('href');
            $(href).animatescroll({
                scrollSpeed: 4000,
                easing: 'easeOutBack',
                padding: 40
            });
        });
    });
});