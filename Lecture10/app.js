(function(angular) {

'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ["$scope", "$filter"];

function DIController($scope, $filter){
  $scope.name = "Monica";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}

})(window.angular);
