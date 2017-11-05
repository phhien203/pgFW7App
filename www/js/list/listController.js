define(["app", "js/list/listView"], function(app, ListView) {
	var $ = Framework7.$;
	var bindings = [{
		element: '.swipeout-delete',
		event: 'click',
		handler: itemDeleted
	}, {
		element: '.swipeout-content',
		event: 'click',
		handler: contactDetails
	}];

	function pageInit() {
		var mySwiperV1 = app.f7.swiper('.swiper-container-v', {
			pagination:'.swiper-pagination-v',
			direction: 'vertical',
			spaceBetween: 100
		});
		var mySwiperH1 = app.f7.swiper('.swiper-container-h-1', {
			pagination:'.swiper-container-h-1 .swiper-pagination-h-1',
			spaceBetween: 50
		});
		var mySwiperH2 = app.f7.swiper('.swiper-container-h-2', {
			pagination:'.swiper-container-h-2 .swiper-pagination-h-2',
			spaceBetween: 50
		});
	}

	function init() {
		var contacts = loadContacts();
		ListView.render({ model: contacts, bindings: bindings });
	}

	function loadContacts() {
		var f7Base = localStorage.getItem("f7Base");
		var contacts = f7Base ? JSON.parse(f7Base) : tempInitializeStorage();
		return contacts;
	}

	function tempInitializeStorage() {
		var contacts = [
			{id: "1", firstName: "Alex", lastName: "Black", phone: "+380501234567" },
			{id: "2", firstName: "Kate", lastName: "White", phone: "+380507654321" }
		];
		localStorage.setItem("f7Base", JSON.stringify(contacts));
		return JSON.parse(localStorage.getItem("f7Base"));
	}

	function itemDeleted(e) {
		var id = $(e.srcElement).data('id');
		var contacts = JSON.parse(localStorage.getItem("f7Base"));
		for (var i = 0; i < contacts.length; i++) {
			if (contacts[i].id === id) {
				contacts.splice(i, 1);
			}
		}
		localStorage.setItem("f7Base", JSON.stringify(contacts));
	}

	function contactDetails(e) {
		//e.preventDefault();
		//e.stopPropagation();
		app.mainView.loadPage('contact.html?id=' + $(e.currentTarget).data('id'));
	}

	return {
		init: init,
		pageInit: pageInit
	};
});