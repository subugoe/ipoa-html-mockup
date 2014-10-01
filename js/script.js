$(document).ready(function () {  

	headHeight = $('.js-head').height();
	pageTitleHeight = $('.page-title').height();
	asdfHeight = $('.asdf').height();
	// asdfasdf = asdf + "px !important";
	// console.log(asdfasdf);
	// $('.content').css({"margin-top": asdfasdf});
	// console.log(pageTitleHeight);

	$('.footer-hidden').css({"height": asdfHeight + "px"});

	$('.nav').hide();

	$('.helper__head').css({"padding-top": headHeight + "px"});

	$('.head .menu a').click(function(event) {
		// event.preventDefault();
		$('.nav').toggle();
		// $('.nav').slideDown();
		// $('.content').css({"background-color": "lightgrey"});
		// $('.more').css({"background-color": "lightgrey"});
	});

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

	console.log(headHeight + "px");

});

var jsMenuElement = document.querySelector(".js-menu");
var jsMenu  = new Headroom(jsMenuElement, {
	offset : 300
});
jsMenu.init();