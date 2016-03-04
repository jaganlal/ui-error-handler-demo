'use strict';

/**
 * @ngdoc service
 * @name uiErrorHandlerDemoApp.specificallyHandleInProgress
 * @description
 * # specificallyHandleInProgress
 * Provider in the uiErrorHandlerDemoApp.
 */
angular.module('uiErrorHandlerDemoApp')
  .provider('specificallyHandleInProgress', function () {

    // Private variables
    var handleInProgress = true;

    // return {
    //   setHandleInProgress: function (hip) {
    //     handleInProgress = hip;
    //   },
    //   $get: function () {
    //     return handleInProgress
    //   }
    // }

    // Private constructor
    function HandleInProgress() {
      this.isHandleInProgress = function () {
        return handleInProgress;
      };
    }

    // Public API for configuration
    this.setHandleInProgress = function (hip) {
      handleInProgress = hip;
    };

    // Method for instantiating
    this.$get = function () {
      return new HandleInProgress();
    };
  });
