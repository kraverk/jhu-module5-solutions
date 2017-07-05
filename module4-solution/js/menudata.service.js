(function () {
	'use strict';

	angular.module('MenuApp')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http', 'ApiBasePath'];
	function MenuDataService($http, ApiBasePath) {
		var MenuDataService = this;

		MenuDataService.getAllCategories = function() {
			return $http({url: ApiBasePath + '/categories.json'}).then(
				     function(result) {
				     	return result.data
					 })	
		};
		
		MenuDataService.getItemsForCategory = function(categoryShortName) {
			return $http({url: ApiBasePath + '/menu_items.json', params: {category: categoryShortName}}).then(
				     function(result) {
				     	return result.data
					 })	

		};
	};

})();
