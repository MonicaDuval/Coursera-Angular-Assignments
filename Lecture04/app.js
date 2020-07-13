(function () {
'use strict';

angular.

angular.module('myFirstApp', [])

// scope: shares data between the view and the viewmodel (angualr.js-spezifische funktion)

  .controller('myFirstController', function ($scope) {
    $SCOPE.name = "Monica";
    $SCOPE. sayHello = function () {
      return "Hello Babe"
    }

  });

})();
