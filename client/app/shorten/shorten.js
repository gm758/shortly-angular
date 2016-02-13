angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.hidden = true;
  $scope.link = {};
  $scope.shortenLink = '';
  $scope.validation = '';
  $scope.spinner = false;
  $scope.addLink = function () {
    $scope.spinner = true;
    if ($scope.validation) {
      Links.addLink({url: $scope.shortenLink}).then(function (res) {
        $scope.spinner = false;
        $scope.link = res.data;
        $scope.hidden = false;
        $scope.shortenLink = '';
      });
    }
  };

  $scope.signout = function () {
    Auth.signout();
  };
  $scope.isValidUrl = function () {
    $scope.validation = Links.isValidUrl($scope.shortenLink);
  };

});
