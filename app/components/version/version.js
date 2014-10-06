'use strict';

angular.module('f1feeder.version', [
  'f1feeder.version.interpolate-filter',
  'f1feeder.version.version-directive'
])

.value('version', '0.1');
