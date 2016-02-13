angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.hidden = true;
  $scope.link = {};
  $scope.shortenLink = '';
  $scope.spinner = false;
  $scope.addLink = function (boolean) {
    $scope.spinner = true;
    if (boolean) {
      Links.addLink({url: $scope.shortenLink}).then(function (res) {
        $scope.spinner = false;
        $scope.link = res.data;
        $scope.hidden = false;
        $scope.shortenLink = '';
      });
    }
  };

});
