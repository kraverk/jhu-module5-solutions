(function () {
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDDO);

	function FoundItemsDDO() {
		return {
			templateUrl : 'found-list.html',
			scope : {
				items : '<',
				onRemove : '&'
			}
		}
	};

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		console.log('Service init...')
		var MenuSearchService = this;

		MenuSearchService.getMatchedMenuItems = function(searchTerm) {
			
			var searchTerms = searchTerm.split(' ');


			return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json'}).then (
					function (result) {

						console.log('Http request completed');
						var found_items = result.data.menu_items.filter(
							function(e) {
								return searchTerms.every( function(element, index, array) {
									return e.description.indexOf(element) !== -1
								}
								);
						    }
						);

						return found_items
					}
				);
		};
	};

	NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
	function NarrowItDownController($scope, MenuSearchService) {
		$scope.searchTerm = '';
		
		$scope.doSearch = function (searchTerm) {
			console.log('Button clicked...');
			if (searchTerm.trim() === '' ) {
				$scope.foundlist = []
			} else {
				MenuSearchService.getMatchedMenuItems(searchTerm)
				.then(function(result) { 
					$scope.foundlist = result
				});	
			}
		};

		$scope.removeitem = function(index) {
			$scope.foundlist.splice(index, 1);
		}
	};
}
)();

