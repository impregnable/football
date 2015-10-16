
angular.module('footballAppFilters', []).filter('dateConv', function() {
  return function(input) {
    return moment(input).calendar();
  };
});
