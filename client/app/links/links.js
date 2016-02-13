angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {

  $scope.links = [];
  Links.getLinks().then(function (res) {
    $scope.links = res.data;
  });

  $scope.signout = function () {
    Auth.signout();
  };
});
