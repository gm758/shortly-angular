angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.hidden = true;
  $scope.link = {};
  $scope.shortenLink = '';
  $scope.validation = '';
  $scope.addLink = function () {
    if ($scope.validation) {
      Links.addLink({url: $scope.shortenLink}).then(function (res) {
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
