'use strict';

// Declare app level module which depends on views, and components
angular.module('f1feeder', [
  'ngRoute',
  'f1feeder.view1',
  'f1feeder.view2',
  'f1feeder.version',
  'f1feeder.drivers'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
