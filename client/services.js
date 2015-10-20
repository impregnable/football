angular.module('footballServices', []).factory('Players', ['$http', function($http) {
  return {
    all: function() {
      return $http.get('/players');
    },
    get: function(playerId) {
      return $http.get('/players/' + playerId);
    }
  }
  }
])
