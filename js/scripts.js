// Body load
$(window).on("load", function () {
	$("body").removeClass("loading");
});


// nav
$(function () {
	$(".menu").click(function (e) {
		e.stopPropagation();
		$("nav").toggleClass("active");
	})
	$(document).click(function (event) {
		if (!$(event.target).is("nav")) {
			$("nav").removeClass("active");
		}
	})
});


// header shadow
$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 94) {
		$("header").addClass("shadow");
	} else {
		$("header").removeClass("shadow");
	}
});

// Gallery overlay
$(function () {


	$('.gallery-container figure').click(function () {

		url = $(this).data("img");
		overlayContent = $('.gallery-overlay .overlay-content');
		overlayLoading = $('.gallery-overlay .overlay-loading');
		title = $(this).data("title");
		description = $(this).data("description");
		price = $(this).data("price");
		size = $(this).data("size");


		$('.gallery-overlay').toggleClass('open');
		$('body').toggleClass('no-scroll');
		overlayLoading.toggleClass('active');

		$('.overlay-side #title').text(title);
		$('.overlay-side #description').text(description);
		$('.overlay-side #price').text(price);
		$('.overlay-side #size').text(size);

		if (url) {
			var img = $('<img />').appendTo(overlayContent).hide();
			img.attr("src", url);
			img.on('load', function () {
				img.show(function () {
					setTimeout(function () {
						overlayLoading.removeClass('active');
						overlayContent.addClass('active');
					}, 1500)
				});
			});

		}
	})

	$('.gallery-close').click(function () {
		$('.gallery-overlay').removeClass('open');
		$('body').removeClass('no-scroll');
		$('.overlay-content img').remove();
		overlayLoading.removeClass('active');
		overlayContent.removeClass('active');
	})
})