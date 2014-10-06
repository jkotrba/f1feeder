"use strict";

var driversServices = angular.module('f1feeder.drivers-service', ['ngResource']);

driversServices.factory('Driver', ['$resource',
  function($resource){
    return $resource('drivers/:driverId.json', {}, {
      query: {method: 'GET', params: {driverId: 'drivers'}, isArray: true}
    });
}]);
