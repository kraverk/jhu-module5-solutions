(function() {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	;

	function ShoppingListCheckOffService() {
		console.log('Service init...');
		var buyList = [ { name: "cookies", quantity: 10 }
		              , { name: "chips", quantity: 7 }
		              , { name: "potatos", quantity: 6 }
		              , { name: "apples", quantity: 5 }
		              , { name: "carrots", quantity: 3 }
		              ];
		var boughtList = [ ];

		this.getBuyList = function() {
			return buyList
		}
		this.getBoughtList = function() {
			return boughtList
		}
		this.BuyItem = function(index) {
			boughtList.push(buyList[index]);
			buyList.splice(index, 1);
		}

	};

	ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function ToBuyController($scope, ShoppingListCheckOffService) {

		$scope.items = ShoppingListCheckOffService.getBuyList();

		$scope.BuyItem = function (index) {
			console.log('Buy triggered...');
			ShoppingListCheckOffService.BuyItem (index);
		};

	};
	AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function AlreadyBoughtController($scope, ShoppingListCheckOffService) {

		$scope.items = ShoppingListCheckOffService.getBoughtList();

	}

})();