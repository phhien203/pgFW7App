define(function() {
	var $ = Framework7.$;

	function init() {
		$(document).on('pageBeforeInit', function (e) {
			var page = e.detail.page;
			load(page.name, page.query);
		});

		$(document).on('pageInit', function (e) {
			var page = e.detail.page;
			pageInit(page.name, page.query);
		});
	}

	function load(controllerName, query) {
		require(['js/' + controllerName + '/'+ controllerName + 'Controller'], function(controller) {
			controller.init(query);
		});
	}

	function pageInit(controllerName, query) {
		require(['js/' + controllerName + '/'+ controllerName + 'Controller'], function(controller) {
			if (controller.pageInit) {
				controller.pageInit(query);
			}
		});
	}

	return {
		init: init,
		load: load
	};
});
