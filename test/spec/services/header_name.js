'use strict';

describe('Service: HEADERNAME', function () {

  // load the service's module
  beforeEach(module('uiErrorHandlerDemoApp'));

  // instantiate service
  var HEADERNAME;
  beforeEach(inject(function (_HEADERNAME_) {
    HEADERNAME = _HEADERNAME_;
  }));

  it('should do something', function () {
    expect(!!HEADERNAME).toBe(true);
  });

});
