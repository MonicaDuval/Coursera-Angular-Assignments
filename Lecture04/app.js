(function(angular) {
  'use strict';
angular.module('FirstModul', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.name = 'Monica';

    $scope.sayHello = function () {
      return "Hello";
    };
  }]);
})(window.angular);
