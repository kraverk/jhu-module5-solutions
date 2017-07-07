(function () {
"use strict";

angular.module('public')
.controller('LoginController', LoginController);

LoginController.$inject = ['user'];
function LoginController(user) {
  var $ctrl = this;
  $ctrl.userData = user;
}


})();
