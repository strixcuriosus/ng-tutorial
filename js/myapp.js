var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Hello World';
});

app.controller('firstController', function($http, $scope){
    $scope.headerInfo = {'title': 'RepoList', 'count': 0};

    $http.get('https://api.github.com/search/repositories?q=hello+world')
    .success(function(data){
        console.log(data);
    });
});
