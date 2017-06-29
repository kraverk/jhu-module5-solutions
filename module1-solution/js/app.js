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

			$scope.message      = chooseMessageFor(wordsCount);
			$scope.messageClass = chooseClassFor(wordsCount);
			$scope.textClass    = chooseBorderClassFor(wordsCount);
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
			if (count == 0) { 
				outputString = "Please enter data first"
			}
			else if (count < 4) { 
				outputString = "Enjoy!" 
			};

			return outputString;
		}

		function chooseBorderClassFor(count) {
			return ((count == 0 ) ? "panel-danger" : "panel-success")
		}
		function chooseClassFor(count) {
			return ((count == 0 ) ? "text-danger" : "text-success")
		}
	}

})();