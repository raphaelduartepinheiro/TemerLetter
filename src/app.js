var app = angular.module('TemerLetter', ['facebook', 'ngRoute']);

app.config(function(FacebookProvider, $routeProvider) {
 FacebookProvider.init('1082041338495282');

 $routeProvider
  .when('/resultado',{
    templateUrl:'../templates/result.html',
    controller: 'ResultCtrl'
  })
  .when('/',{
    templateUrl:'../templates/auth.html',
    controller: 'AuthCtrl'
  });
});

app.controller('AuthCtrl', function ($scope, Facebook) {
  $scope.login = function() {
      if (!$scope.loggedIn){
        Facebook.login(function(response) {
          $scope.me();
        });
      }else{
        $scope.me();
      }
    };

    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          $scope.loggedIn = true;
        } else {
          $scope.loggedIn = false;
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me', function(response) {
        $scope.user = response;
      });
    };

    $scope.getLoginStatus();
});

app.controller('ResultCtrl', ['$scope', function ($scope) {
  
}]);