define(['app', 'hbs!js/list/swipers'], function(app, template) {
	var $ = Framework7.$;

	function render(params) {
		$('.page-content').html(template(params.model));

		//var mySwiperH1 = app.f7.swiper('.swiper-container-h-1', {
		//	pagination:'.swiper-container-h-1 .swiper-pagination-h',
		//	spaceBetween: 50
		//});
		//var mySwiperH2 = app.f7.swiper('.swiper-container-h-2', {
		//	pagination:'.swiper-container-h-2 .swiper-pagination-h',
		//	spaceBetween: 50
		//});
		//var mySwiperV1 = app.f7.swiper('.swiper-container-v', {
		//	pagination:'.swiper-pagination-v',
		//	direction: 'vertical',
		//	spaceBetween: 100
		//});


		bindEvents(params.bindings);
	}

	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}

	return {
		render: render
	};
});
