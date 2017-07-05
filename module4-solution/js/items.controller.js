(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoryItemsController', CategoryItemsController);

	CategoryItemsController.$inject = ['items'];
	function CategoryItemsController(items) {
		var CategoryItemsController = this;

		CategoryItemsController.category = items.category;
		CategoryItemsController.item_list = items.menu_items;
	}

})();
