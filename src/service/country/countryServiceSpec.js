'use strict';

var should = require('should');
var countryService = require('./countryService')();

describe('countryService', function () {

  describe('#countryByCode', function () {
    it('should get correct country object', function () {
      countryService.countryByCode('no').name.should.eql('Norway');
    });

    it('should return undefined for miss', function () {
      should.equal(countryService.countryByCode('yolo'), undefined);
    });
  });

  describe('#countryByName', function () {
    it('should get correct country object', function () {
      countryService.countryByName('NoRwaY').code.should.eql('NO');
    });

    it('should return undefined for miss', function () {
      should.equal(countryService.countryByName('yolo'), undefined);
    });
  });

  describe('#countryByNativeName', function () {
    it('should get correct country object', function () {
      countryService.countryByNativeName('norGe').code.should.eql('NO');
    });

    it('should return undefined for miss', function () {
      should.equal(countryService.countryByNativeName('yolo'), undefined);
    });
  });
});
