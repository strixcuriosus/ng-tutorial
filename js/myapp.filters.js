var filters = angular.module('myApp.filters', []);
filters.filter('prettyk', function(){
    return function(input) {
        if (input >= 1000) {
            return Math.floor(input/1000) + 'k';
        } else {
            return input;
        }
    };
});
