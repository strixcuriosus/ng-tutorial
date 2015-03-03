var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Name this app!';
});

app.controller('firstController', function($http, $scope){
    $scope.controllerVariable = 'I\'m the controller variable';
});

