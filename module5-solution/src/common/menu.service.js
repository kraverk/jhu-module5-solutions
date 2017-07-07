(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$q', '$http', 'ApiPath'];
function MenuService($q, $http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (name) {
    return $http.get(ApiPath + '/menu_items/'+name+'.json')
                .then(function (response) {
                        return response.data;
                    },
                  function () {
                  var result = {};
                      result.message = "No such menu number exists!";
                      result.class   = "alert-danger";
                      result.header  = "Ooops";
                  return $q.reject(result);
                })
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
