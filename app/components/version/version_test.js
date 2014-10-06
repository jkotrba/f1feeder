'use strict';

describe('f1feeder.version module', function() {
  beforeEach(module('f1feeder.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
