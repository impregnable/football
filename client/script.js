var footballApp = angular.module('football', ['ngRoute', 'footballAppFilters']);

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
    $http.get('/players/' + $routeParams.playerId).success(function(data) {
      $scope.player_id = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(ImageUrl) {
      $scope.mainImageUrl = ImageUrl;
    };
  }]
)

footballApp.controller('PlayerListCtrl', ['$scope','$http',
  function($scope, $http) {
    $http.get('/players').success(function(data) {
      $scope.players = data;
    });

    $scope.query = "";

    $scope.order = "player_name";

    $scope.orderFields = [
      { value: "player_name", display: "By Name" },
      { value: "player_lastname", display: "By Lastname" },
      { value: "player_club", display: "By Club" },
      { value: "player_nationality", display: "By Nationality" },
    ];

    $scope.search = function(item) {
      if ( (item.player_name.toLowerCase().indexOf($scope.query) != -1) || (item.player_lastname.toLowerCase().indexOf($scope.query) != -1) ) {
        return true;
      }
      return false;
    };
  }]
)
