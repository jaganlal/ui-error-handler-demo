'use strict';

/**
 * @ngdoc service
 * @name uiErrorHandlerDemoApp.RequestsErrorHandler
 * @description
 * # RequestsErrorHandler
 * Factory in the uiErrorHandlerDemoApp.
 */
angular.module('uiErrorHandlerDemoApp')
  .factory('RequestsErrorHandler', ['$q', 'HEADER_NAME', 'GENERIC_ERROR_HANDLING', function($q, HEADER_NAME, GENERIC_ERROR_HANDLING) {
    // Service logic
    // ...

    // Public API here
    return {
      // --- The user's API for claiming responsiblity for requests ---
      specificallyHandled: function(specificallyHandledBlock) {
          GENERIC_ERROR_HANDLING = false;
          try {
              return specificallyHandledBlock();
          } finally {
              GENERIC_ERROR_HANDLING = true;
          }
      },

      response: function(res) {
        // if(res && res.config && res.config.headers && res.config.headers[HEADER_NAME]) {
        if(res && res.config && res.config[HEADER_NAME]) {
          console.log("Response: "+JSON.stringify(res));
        }

        return res;
      }, 

      // --- Response interceptor for handling errors generically ---
      responseError: function(rejection) {
          var shouldHandle = (rejection && rejection.config && rejection.config.headers
              && rejection.config.headers[HEADER_NAME]);

          if (shouldHandle) {
              // --- Your generic error handling goes here ---
          }

          return $q.reject(rejection);
      }
    };
  }]);
