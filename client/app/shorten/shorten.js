angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.hidden = true;

  $scope.handleSubmit = function () {
    Links.addLink({url: $scope.shortenLink}).then(function (res) {
      var data = res.data;
      $scope.visits = data.visits;
      $scope.title = data.title;
      $scope.url = data.url;
      $scope.baseUrl = data.base_url;
      $scope.code = data.code;
      $scope.hidden = !$scope.hidden;
      $scope.shortenLink = '';
    });
  };

  $scope.signout = function () {
    Auth.signout();
  };
});
