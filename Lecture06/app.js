(function(angular) {
  'use strict';
angular.module('NameCalculator', [])
  .controller('NameCalculatorController', ['$scope', function($scope) {

    $scope.name = "Monica";
    $scope.value = 0;

    $scope.displayValue = function() {
          var newvalue = calculateNameValue ($scope.name);
          $scope.value = newvalue;
    };

    function calculateNameValue (string) {
          var totalStringValue = 0;
          for (var i = 0; i < string.length; i++) {
              totalStringValue+=string.charCodeAt(i);
          }
          return totalStringValue;
    }

  }]);
})(window.angular);
