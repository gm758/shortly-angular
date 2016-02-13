angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {

  $scope.links = [];
  Links.getLinks().then(function (data) {
    $scope.links = data;
  });

  $scope.signout = function () {
    Auth.signout();
  };
});
