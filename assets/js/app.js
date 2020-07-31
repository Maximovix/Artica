$(function() {
	let burger = $('#burger'),
		nav = $('#nav'),
		nav_close = $('#nav-close'),
		widthWindow = $(window).width();

	/* Nav */
	$(burger).on('click', function(event) {
		event.preventDefault();
		$(burger).toggleClass('active');
		$(nav).toggleClass('active');
		if (widthWindow <= 600) {
			$('body').addClass('hide');
		}
	});

	$(nav_close).on('click', function(event) {
		event.preventDefault();
		$(burger).removeClass('active');
		$(nav).removeClass('active');
		$('body').removeClass('hide');
	});

	/* Scroll */
	$('[data-scroll]').click(function(event) {
		event.preventDefault();

		let blockID = $(this).data('scroll'),
			blockOffSet = $(blockID).offset().top;
			heightHeader = $('.header').outerHeight();


			$(burger).removeClass('active');
			$(nav).removeClass('active');
			$('body').removeClass('hide');

		$('html,body').animate({
			scrollTop: blockOffSet - heightHeader
		}, 700);
	})

	/* Tabs */
	$('[data-tab]').click(function(event) {
		event.preventDefault();

		let tab = $(this).data('tab');

		tab = '#'+tab;

		$('.story__item,.portfolio__image__inner').removeClass('active');

		$(tab).addClass('active');
		
	})

	$('[data-close]').click(function(event) {
		event.preventDefault();

		let story = $(this).data('close');

		story = '#'+story;

		$(story).removeClass('active');
	});

	$('.portfolio__item').click(function(event) {
		event.preventDefault();

		$(this).attr('data-content','active');
	})

})