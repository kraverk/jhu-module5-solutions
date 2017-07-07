(function () {
"use strict";

angular.module('common')
.directive('formField', function() { 
	return 	{
	  templateUrl: 'src/common/components/field.html',
	  scope: {
	    id : '<',
	    data:'=',
	    label:'<',
	    validation:'<',
	    nonreq: '<',
	    example: '<'
	  } ,
	}
}); 

})();

