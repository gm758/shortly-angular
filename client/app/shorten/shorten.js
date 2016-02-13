angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.hidden = true;
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink({url: $scope.shortenLink}).then(function (res) {
      $scope.link = res.data;
      $scope.hidden = !$scope.hidden;
      $scope.shortenLink = '';
    });
  };

  $scope.signout = function () {
    Auth.signout();
  };
});
