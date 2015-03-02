var app = angular.module('myApp');

app.factory('githubService', function($http, $q){
    var githubServiceInstance = {};
    var searchUrlBase = 'https://api.github.com/search/repositories';

    var formatRepo = function(repo){
        return {'name': repo.name,
                'description': repo.description,
                'user': repo.owner.login,
                'stars': parseInt(repo.stargazers_count, 10),
                'liked': false
               };
    };

    var handleRepoList = function(repoData){
        var repos = repoData.data.items.map(formatRepo).sort(function(a, b){
            return b.stars - a.stars;
        });

        return $q.when({repos: repos, totalCount: repoData.data.total_count});
    };

    var fetchRepos = function(keyword){
        get_config = { 'params': {
            'q':  keyword,
        } };
        return $http.get(searchUrlBase, get_config)
        .then(handleRepoList);
    };

    githubServiceInstance.search = fetchRepos;
    return githubServiceInstance;
});
