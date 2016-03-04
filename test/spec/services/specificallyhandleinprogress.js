'use strict';

describe('Service: specificallyHandleInProgress', function () {

  // instantiate service
  var specificallyHandleInProgress,
    init = function () {
      inject(function (_specificallyHandleInProgress_) {
        specificallyHandleInProgress = _specificallyHandleInProgress_;
      });
    };

  // load the service's module
  beforeEach(module('uiErrorHandlerDemoApp'));

  it('should do something', function () {
    init();

    expect(!!specificallyHandleInProgress).toBe(true);
  });

  it('should be configurable', function () {
    module(function (specificallyHandleInProgressProvider) {
      specificallyHandleInProgressProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(specificallyHandleInProgress.greet()).toEqual('Lorem ipsum');
  });

});
