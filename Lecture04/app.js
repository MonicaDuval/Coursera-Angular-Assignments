(function () {
'use strict';
angular.
angular.module('myFirstApp', [])

// scope: shares data between the view and the viewmodel (angualr.js-spezifische funktion)

  .controller('myFirstController', function ($scope) {
    $scope.name = "Monica";
    $scope.sayHello = function () {
      return "Hello Babe"
    }

  });

})();
