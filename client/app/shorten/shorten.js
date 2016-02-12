angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.hidden = true;

  $scope.handleSubmit = function () {
    Links.addLink($scope.shortenLink).then(function (res) {
      console.log(res.data);
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
});
