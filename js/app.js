

var app = angular.module('startApp', ['ngMaterial']);
app.controller('Menucontroller', function($scope, $mdSidenav) {
  $scope.toggleLeft= function() {
    $mdSidenav('left').toggle();
  };
});

