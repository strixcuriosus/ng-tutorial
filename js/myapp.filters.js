var filters = angular.module('myApp.filters', []);
filters.filter('prettyk', function(){
    return function(item) {
        if (item >= 1000 && item < 10e6) {
            return Math.floor(item/1000) + 'k';
        } else {
            return item;
        }
    };
});

filters.filter('notmany', function(){
    return function(item) {
        if (item < 3) {
            return 'not many';
        } else {
            return item;
        }
    };
});

filters.filter('alphabetizeByName', function(){
    return function(items) {
        if (items) {
            var filtered = items.slice();
            filtered.sort(function(a, b){
                var aName = a.name.toLowerCase();
                var bName = b.name.toLowerCase();
                if(aName < bName){
                    return -1;
                } else if (aName > bName) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return filtered;
        }
    };
});

filters.filter('rankByStars', function(){
    return function(items) {
        if (items) {
            var filtered = items.slice();
            filtered.sort(function(a, b){
                return b.stars - a.stars;
            });
            return filtered;
        }
    };
});
