angular.module('myApp.directives', [])
.directive('repoView', function(){
    return {
        restrict: 'E', // directive will be triggered only on html Elements, like <repo-view>
        scope: {
            repo: '=' // isolated scope, where repo is passed in the HTML
        },
        templateUrl:  'repo-view.html',
        link: function(scope, element, attrs) {
            scope.likeRepo = function(){
                scope.repo.liked = !scope.repo.liked;
                if (scope.repo.liked) {
                    scope.repo.stars++;
                } else {
                    scope.repo.stars--;
                }
            };
        }
    };
});
