(function() {
	'use strict';

	angular.module('FirstApp', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		console.log('Running...');
		$scope.displayMessage = function () {
			console.log('calculate...');
			var wordsCount = wordCount($scope.text);

			$scope.message = chooseMessageFor(wordsCount);
			$scope.class   = chooseClassFor(wordsCount);
		}

		function wordCount(inputString) {
			var strArray = (inputString || "").split(",");
			var count = strArray.reduce(function(a, b) {
				var v = (!b.trim() == '') ? 1 : 0;
				return a + v
			}, 0);
			return count			
		}

		function chooseMessageFor(count) {
			var outputString = "Too much!"
			//console.log(count);
			if (count == 0) { outputString = "Please enter data first"}
			else if (count < 4) { outputString = "Enjoy!" };

			return outputString;
		}

		function chooseClassFor(count) {
			return "panel " + ((count == 0 ) ? "panel-danger" : "panel-success") + " " + ((count == 0 ) ? "text-danger" : "text-success")
		}
	}

})();