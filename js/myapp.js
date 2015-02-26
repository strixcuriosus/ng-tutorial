var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.appName = 'Hello World';
});

app.controller('firstController', function($http, $scope){
    $scope.headerInfo = {'title': 'RepoList', 'count': 0};

    $scope.likeRepo = function(repo){
        repo.liked = !repo.liked;
    };

    $http.get('https://api.github.com/search/repositories?q=hello+world')
    .success(handleRepoList);

    function handleRepoList(data){
        $scope.repos = data.items.map(formatRepo).sort(function(a, b){
            return b.stars - a.stars;
        });
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
