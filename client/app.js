var footballApp = angular.module('football', ['ngRoute', 'footballAppFilters', 'footballControllers', 'footballServices']);

footballApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/players', {
    templateUrl: 'html/player-list.html',
    controller: 'PlayerListCtrl'
  }).
  when('/players/:playerId', {
    templateUrl: 'html/player-detail.html',
    controller: 'PlayerDetailCtrl'
  }).
  otherwise({
    redirectTo: '/players'
  });
}]);
