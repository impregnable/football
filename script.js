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

    $scope.order = "name";

    $scope.orderFields = [
      { value: "name", display: "By Name" },
      { value: "lastname", display: "By Lastname" },
      { value: "club", display: "By Club" },
      { value: "country", display: "By Country" },
    ];

    $scope.getDisplayPosition = function(number) {
      switch(number) {
        case "0": return "goalkeeper";
        case "1": return "defender";
        case "2": return "midfielder";
        case "3": return "forward";
      }
    };
  }]
)
