jQuery(document).ready(function(i){i("#portfolio-filter a").click(function(){i("#portfolio-filter a.active").removeClass("active");var t=i(this).attr("data-cat");return e.isotope({filter:t,animationEngine:"jquery"}),i(this).addClass("active"),!1});var t=i("#portfolio-items");i("#portfolio-filter");function o(){var o,e,a=t.parent().width(),n=(o=jQuery(window).width()+15,e=1,o>1024?e=4:o>768?e=3:o>480?e=2:o<480&&(e=1),e),r=Math.floor(a/n);t.find("article").each(function(){i(this).css({width:r+"px"})})}var e=i("#portfolio-items").imagesLoaded(function(){i("#portfolio-items").isotope({animationEngine:"best-available",animationOptions:{duration:250,easing:"easeInOutSine",queue:!1}}),i(window).bind("resize",function(){o();try{t.isotope("layout")}catch(i){}})})});
jQuery(document).ready(function($) {
	//create the slider
	$('.testimonials-wrapper').flexslider({
		selector: ".slides > li",
		animation: "slide",
		controlNav: false,
		slideshow: true,
		smoothHeight: true,
		start: function(){
			$('.slides').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

});