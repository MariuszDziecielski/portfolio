$(function () {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        disable: $(window).width() < 768
    });
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
            AOS.refreshHard();
        });
    });
    if ($(window).width() < 1196) {
        $('.projects .chart').removeAttr('data-aos-delay');
    }
    if ($(window).width() < 1000) {
        $('.known_technologies .chart').removeAttr('data-aos-delay');
        $('.unknown_technologies .chart').removeAttr('data-aos-delay');
    }
});