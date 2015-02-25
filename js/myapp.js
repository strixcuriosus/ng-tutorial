var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Hello World';
});
