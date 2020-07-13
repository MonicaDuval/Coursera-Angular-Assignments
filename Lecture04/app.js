(function(angular) {
  'use strict';
angular.module('FirstModule', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.initialname = 'Monica';

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);
})(window.angular);
