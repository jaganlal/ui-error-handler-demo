'use strict';

describe('Service: GENERICERRORHANDLING', function () {

  // load the service's module
  beforeEach(module('uiErrorHandlerDemoApp'));

  // instantiate service
  var GENERICERRORHANDLING;
  beforeEach(inject(function (_GENERICERRORHANDLING_) {
    GENERICERRORHANDLING = _GENERICERRORHANDLING_;
  }));

  it('should do something', function () {
    expect(!!GENERICERRORHANDLING).toBe(true);
  });

});
