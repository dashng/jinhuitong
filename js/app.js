$(function(){
	var $body = $('body');
	var menu_list = $('.nav1').find('a');
	var to_top_hander = $('.to-top');
	menu_list.each(function(i, $div){
		$(this).on('click', function(){
			var index = i+2;
			$body.animate({
				scrollTop: $('.index-panel-'+index).offset().top+'px'
			},
			500,
			function(){
					
			});
		});
	});
	$(window).scroll(function(){
		var $top = $(this).scrollTop();
		if($(window).width() <= 1200){
			to_top_hander
				.hide();
		}else if($top >= $('.index-panel-2').offset().top){
			to_top_hander
				.show()
				.css('top', $top + $(window).height() - 90);
		}else{
			to_top_hander
				.hide();
		}
	});
	$(window).trigger('scroll');
	$('div.nav-content > div.nav li').on('click', function(event){
		event.stopPropagation();
		var href = $(this).attr('data-href');
		window.location.href = href;
	});
	$('.to-top').on('click', function(){
		$(window).scrollTop(0);
	});
	$('.redian').hover(function(event){
		event.stopPropagation();
		$('.redian-content')
		.animate({
			opacity: 1.0
		}, 500, function() {
			
		});
	}, function(event){
		event.stopPropagation();
		$('.redian-content').animate({
			opacity: 0.0
		}, 500, function() {
		});
	});
});