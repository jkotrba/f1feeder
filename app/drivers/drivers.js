"use strict";

angular.module('f1feeder.drivers', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/drivers', {
      templateUrl: 'drivers/drivers.html',
      controller: 'driversCtl'
    });
  }])

  .controller('driversCtl', ['$scope', function ($scope) {
    $scope.driversList = [
      {
        Driver: {
          givenName: 'Sebastian',
          familyName: 'Vettel'
        },
        points: 322,
        nationality: "German",
        Constructors: [
          {name: "Red Bull"}
        ]
      },
      {
        Driver: {
          givenName: 'Fernando',
          familyName: 'Alonso'
        },
        points: 207,
        nationality: "Spanish",
        Constructors: [
          {name: "Ferrari"}
        ]
      }
    ];

  }]);