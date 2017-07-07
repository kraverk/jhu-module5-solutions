(function () {
"use strict";

angular.module('common')
.service('LoginService', LoginService);

LoginService.$inject = ['$q', '$timeout'];
function LoginService($q, $timeout) {
  var service = this;

  service.getMyInfo = function () {
    console.log("My info getted", service.info);
    return service.info
  };

  service.setMyInfo = function (info) {

    var deferred = $q.defer();

    var result = {
      class  : "alert-success",
      message: "Your information has been saved",
      header : "Well done!"
    };

    $timeout(function () {
      if (true) //for future use
       {
        service.info = info;
        deferred.resolve(result)
      }
      else {
        deferred.reject(result);
      }
    }, 100);

    return deferred.promise;
   
  };

}

})();
