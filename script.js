var footballApp = angular.module('football', ['ngRoute']);

footballApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/players', {
    templateUrl: 'html/player-list.html',
    controller: 'PlayerListCtrl'
  }).
  otherwise({
    redirectTo: '/players'
  });
}]);

footballApp.controller('PlayerListCtrl', ['$scope','$http',
  function($scope, $http) {
    $http.get('data/players.json').success(function(data) {
      $scope.players = data;
    });
  }]
)
