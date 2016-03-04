'use strict';

describe('Service: RequestsErrorHandler', function () {

  // load the service's module
  beforeEach(module('uiErrorHandlerDemoApp'));

  // instantiate service
  var RequestsErrorHandler;
  beforeEach(inject(function (_RequestsErrorHandler_) {
    RequestsErrorHandler = _RequestsErrorHandler_;
  }));

  it('should do something', function () {
    expect(!!RequestsErrorHandler).toBe(true);
  });

});
