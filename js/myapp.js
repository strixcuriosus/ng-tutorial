var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Hello World';
});

app.controller('firstController', function($http, $scope){
    $scope.headerInfo = {'title': 'RepoList', 'count': 0};

    $scope.likeRepo = function(repo){
        repo.liked = !repo.liked;
        if (repo.liked) {
            repo.stars++;
        } else {
            repo.stars--;
        }
    };

    $scope.fetchRepoList = function(querystring) {
        $http.get('https://api.github.com/search/repositories?sort=stars&q=' + querystring)
        .success(handleRepoList);
    };

    function handleRepoList(data){
        $scope.repos = data.items.map(formatRepo).sort(function(a, b){
            return b.stars - a.stars;
        });
        $scope.headerInfo.count = data.total_count;
        $scope.headerInfo.title = $scope.repoKeyword;
    }

    function formatRepo(repo){
        return {'name': repo.name,
                'description': repo.description,
                'user': repo.owner.login,
                'stars': parseInt(repo.stargazers_count, 10),
                'liked': false
            };
    }
});
