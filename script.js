jQuery(document).ready(function($) {
	$('.nav-icon').click(function(event) {
		$('.main-menu').slideToggle();
	});
			$('.inner-slide.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    autoplay:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		   });
	// Click image in Gallery
	$('.gallery-item').click(function(event) {
		var curLinkImage = $(this).find('img').attr('src');
		$('.large-gallery img').attr('src', curLinkImage);
	});

	//function Load Item
	function loadItem(){
			var duration=300;
				$('.dish-item').each(function(i) {
			  $(this).delay( i*(duration/2) ).animate({top:"0"}, duration);
			});
	}
	//loadItem();
	var posDish = $('.dish').offset().top;
	var posScroll;
	$(window).scroll(function(event) {
		posScroll = $(window).scrollTop();
		if(parseInt(posScroll) >= (posDish-100) ){
			loadItem();
		}
	});
	
	if(screen.width <= 414){
		loadItem();
	}

	$('a').click(function(event) {
		event.preventDefault();
		var link = $(this).data('tab');
		var selector = '[data-target="'+link+'"]';
		var pos = $(selector).offset().top;
		$('html,body').animate({
			scrollTop: pos},
			1000, function() {
			/* stuff to do after animation is complete */
		});
		});

});