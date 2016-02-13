// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.validPassword = false;
  $scope.validUsername = false;

  $scope.signin = function () {
    if ($scope.validPassword && $scope.validUsername) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    if ($scope.validPassword && $scope.validUsername) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.isValidUsername = function () {
   $scope.validUsername = Auth.isValidInput($scope.user.username);
  };

  $scope.isValidPassword = function () {
   $scope.validPassword = Auth.isValidInput($scope.user.password);
  };

});
