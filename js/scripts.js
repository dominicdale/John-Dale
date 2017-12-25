overlayContent = $('.gallery-overlay .overlay-content');
overlayLoading = $('.gallery-overlay .overlay-loading');

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
		var url = $(this).data("img");

		$('.gallery-overlay').toggleClass('open');
		$('body').toggleClass('no-scroll');
		overlayLoading.toggleClass('active');

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