var footballApp = angular.module('football', ['ngRoute']);

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

footballApp.controller('PlayerDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/json/' + $routeParams.playerId + '.json').success(function(data) {
      $scope.player = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(ImageUrl) {
      $scope.mainImageUrl = ImageUrl;
    };
  }]
)

footballApp.controller('PlayerListCtrl', ['$scope','$http',
  function($scope, $http) {
    $http.get('data/json/players.json').success(function(data) {
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
        case "0": return "Goalkeeper";
        case "1": return "Defender";
        case "2": return "Midfielder";
        case "3": return "Forward";
      }
    };

    $scope.getPositionClass = function(number) {
      switch(number) {
        case "0": return "goalkeeper";
        case "1": return "defender";
        case "2": return "midfielder";
        case "3": return "forward";
      }
    };
  }]
)
