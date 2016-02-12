angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.links = Links.getLinks().then(function (res) {
    console.log(res.data);
    return res.data;
  });
});
