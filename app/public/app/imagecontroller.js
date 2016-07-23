var app = angular.module('imgAlbum', []);

app.controller('imgController', function ($scope) {
    $http({
        method: 'GET',
        url: 'localhost:8081/cdn/vtewari/all'
    }).then(function fSuccess(response) {
        $scope.srcarr = response.data
    }, function fError(response) {
        $scope.src = response.statusText;
    });
});
