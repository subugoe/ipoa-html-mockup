$(document).ready(function () {  

	headHeight = $('.js-head').height();
	pageTitleHeight = $('._page-title').height();
	asdfHeight = $('.asdf').height();
	viewportWidth = $(window).width();

	console.log('headHeight: ' + headHeight + "px");
	console.log('pageTitleHeight: ' + pageTitleHeight + "px");
	console.log('viewportWidth: ' + viewportWidth + "px");

	$('.footer-hidden').css({"height": asdfHeight + "px"});

	$('.nav').hide();

	$('.js-slide-menu-button').click(function(event) {
		$('.nav').toggle();
	});

// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   $(".parallax").css("transform","translateY(" +  (scroll/2)  + "px)");
// });

	if (viewportWidth >= 768) {
		$('.helper__head').css({"padding-top": headHeight + "px"});
		$('.js-head').headroom({
			offset : headHeight,
			classes : {
				initial : "js-head",
				pinned : "js-head--pinned",
				unpinned : "js-head--unpinned",
				top : "js-head--top",
				notTop : "js-head--not-top"
			}
		});
		
		$('.page-title').headroom({
			offset : headHeight,
			classes : {
				initial : "shift",
				pinned : "shift",
				unpinned : "dummy"
			}
		});
	} else {
		console.log('move the header');
		$('.headroom').css({
			'position': 'relative'
		});
	}

	$('.js-offcanvas-menu-button').click(function(){
		// this.addClass('active');
		console.log('asdf');
		$('.off-canvas').css({
			'left': 0,
		})
		$('.push').css({
			'left':'100%',
			'position': 'fixed'
		})
	});

	$('.off-canvas a').click(function(){
		$('.off-canvas').css({
			'left': '-100%'
		})
		$('.push').css({
			'left': '0',
			'position':'relative'
		})
	});

	// $('.js-offcanvas-menu-button').bigSlide({
	// 	menuWidth : '80%',
	// 	speed : 0
	// });

	// $('.off-canvas').scotchPanel({
	// 	containerSelector: 'html',
	// 	direction: 'left',
	// 	duration: 300,
	// 	transition: 'ease',
	// 	clickSelector: '.js-offcanvas-menu-button',
	// 	distanceX: '100%',
	// 	enableEscapeKey: true
	// });

});

// var jsMenuElement = document.querySelector(".js-menu");
// var jsMenu  = new Headroom(jsMenuElement, {
// 	offset : 300
// });
// jsMenu.init();