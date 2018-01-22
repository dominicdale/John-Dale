// Body load
$(window).on("load", function () {
	setTimeout(function () {
		$("body").removeClass("loading");
	}, 1000)
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
		img = $('<img />').appendTo(overlayContent).hide();

		$('.gallery-overlay').toggleClass('open');
		$('body').toggleClass('no-scroll');
		overlayLoading.toggleClass('active');

		// Populate fields
		$('.overlay-side #title').text(title);
		$('.overlay-side #description').text(description);
		$('.overlay-side #price').text(price);
		$('.overlay-side #size').text(size);

		// Add src to image and display loading animation
		if (url) {
			img.attr("src", url);
			img.on('load', function () {
				img.show(function () {
					setTimeout(function () {
						overlayLoading.removeClass('active');
						overlayContent.addClass('active');
					}, 1000)
				});
			});
		}

		// Remove price box if empty
		if (!$('.overlay-side #price').is(':empty')){
			$('.price-container').show();
		} else {
			$('.price-container').hide();
		}

		// Update contact button email address and subject
		$('#contactButton').attr("href", "mailto:daletess@aol.com?subject=I'd like to purchase " + title)
	})

	$('.gallery-close').click(function () {
		$('.gallery-overlay').removeClass('open');
		$('body').removeClass('no-scroll');
		$('.overlay-content img').remove();
		overlayLoading.removeClass('active');
		overlayContent.removeClass('active');
	})
})


// Homepage image move
$(document).ready(function () {
	var movementStrength = 50;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$(".homepage-bg").mousemove(function (e) {
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('.homepage-bg').css("background-position", newvalueX + "px     " + newvalueY + "px");
	});
});
