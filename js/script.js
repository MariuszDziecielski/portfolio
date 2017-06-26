$(function () {
    /*
    AOS.init({
        duration: 1200,
        easing: 'linear',
        disable: $(window).width() < 768
    });
    */
    $('header li').each(function (index, elem) {
        $(elem).click(function () {
            $('header li').removeClass('active');
            $(elem).addClass('active');
        });
    });
    $('.navbar-collapse a').on('click', function () {
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
            //AOS.refreshHard();
        });
    });
});