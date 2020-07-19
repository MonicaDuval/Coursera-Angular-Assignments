(function(angular) {

'use strict';

angular.module('LunchCheck', [])
  .controller('FoodCheckerController', ['$scope', function($scope) {
    $scope.list = "";
    $scope.advice = "";

    $scope.checkList = function(){
      var foodList = $scope.list;
      var characters = foodList.split("");
      var items = foodList.split(",");

      switch (characters.length) {
        case 0:
          $scope.advice = "Please enter your data first";
          break;

        default:
        if (items.length < 4){
          $scope.advice = "Enjoy!";
        }else {$scope.advice = "Too much!"};
          break;
      };

    };

  }]);
})(window.angular);
