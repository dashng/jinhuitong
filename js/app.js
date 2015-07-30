$(function(){
	var menu_list = $('.nav1').find('a');
	menu_list.each(function(i, $div){
		$(this).on('click', function(){
			$('.index-panel, .panel-nav:not(".nav1")').hide();
			var index = i*1+2;
			$('.index-panel-'+index+', '+ '.nav'+index).show();
		});
	});
	menu_list.filter(':first').trigger('click');
	
	
	$('div.nav-content > div.nav li').on('click', function(event){
		event.stopPropagation();
		var href = $(this).attr('data-href');
		window.location.href = href;
	});
	
});