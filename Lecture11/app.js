(function(angular) {

'use strict';

angular.module('MSGApp', [])
.controller('MSGController', MSGController);

MSGController.$inject = ["$scope"];

function MSGController($scope){
  $scope.name = "Monica";
  $scope.stateOfBeing = "hund";

  $scope.sayMessage = function (){

    return " liebt kleine Babyhunde <3";
  };

  $scope.loveMarco = function(){
    $scope.stateOfBeing = "marco";
  };
}

})(window.angular);
