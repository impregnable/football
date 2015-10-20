var footballControllers = angular.module('footballControllers', []);

footballControllers.controller('PlayerDetailCtrl', ['$scope', '$routeParams', 'Players',
function($scope, $routeParams, Players) {
    Players.get($routeParams.playerId).success(function(player) {
      $scope.player_id = player;
      $scope.mainImageUrl = player.images[0];
    });

    $scope.setImage = function(ImageUrl) {
      $scope.mainImageUrl = ImageUrl;
    };
  }]
)

footballControllers.controller('PlayerListCtrl', ['$scope', 'Players',
function($scope, Players) {
    Players.all().success(function(players) {
      $scope.players = players;
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
