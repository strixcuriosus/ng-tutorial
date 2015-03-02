var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Hello World';
});

app.controller('firstController', function($scope, githubService){
    $scope.headerInfo = {'title': 'RepoList', 'count': 0};

    $scope.likeRepo = function(repo){
        repo.liked = !repo.liked;
        if (repo.liked) {
            repo.stars++;
        } else {
            repo.stars--;
        }
    };

    $scope.fetchRepoList = _.debounce(fetchRepoList, 500);

    function fetchRepoList() {
        githubService.search($scope.repoKeyword).then(function(data){
            $scope.headerInfo.title = $scope.repoKeyword;
            $scope.headerInfo.count = data.totalCount;
            $scope.repos = data.repos;
        });
    }
});

