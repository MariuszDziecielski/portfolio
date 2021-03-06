const $listItems = $('header li');
$listItems.each((i, elem) => {
	$(elem).click(() => {
		$listItems.removeClass('active');
		$(elem).addClass('active');
	});
});
$('.navbar-collapse a').click(() => {
	if ($('.navbar-collapse').hasClass('in')) {
		$('.navbar-toggle').click();
	}
});
$('.navbar-nav li a').each((i, elem) => {
	$(elem).click(() => {
		const href = $(elem).attr('href');
		$(href).animatescroll({
			scrollSpeed: 4000,
			easing: 'easeOutBack',
			padding: 40
		});
	});
});