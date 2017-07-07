(function () {
"use strict";

angular.module('public')
.component('loginForm', {
  templateUrl: 'src/public/login/login-form.html',
  bindings: {
    signup : '&'
  },
  controller: LoginFormController,
});

LoginFormController.$inject = ['$scope', '$q', 'LoginService', 'MenuService'];
function LoginFormController($scope, $q, LoginService, MenuService) {

	var $ctrl = this;

  $ctrl.init = function () {
    $ctrl.userData = {}; 
  };

	$ctrl.signup = function() {

    $ctrl.result = undefined;

    var sigupPromise = LoginService.setMyInfo($ctrl.userData); 
    var menuPromise  = MenuService.getMenuItem($ctrl.userData.dish);

    $q.all([sigupPromise, menuPromise]).
    then(function (response) {
      $ctrl.result = response[0];
      $ctrl.userData.favorite = response[1];
      $ctrl.signedup = true;
      $scope.SubmitForm.$setPristine();
      $scope.SubmitForm.$setUntouched();
      $ctrl.init();
    })
    .catch(function (errorResponse) {
      console.log(errorResponse.message);
      $ctrl.result = errorResponse;
      $ctrl.signedup = true;
    });

	}
 
}

})();
