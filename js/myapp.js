var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Hello World';
});

app.controller('firstController', function($scope){
    $scope.headerInfo = {'title': 'RepoList', 'count': 0};
});
