'use strict';

/**
 * @ngdoc function
 * @name uiErrorHandlerDemoApp.decorator:Http
 * @description
 * # Http
 * Decorator of the uiErrorHandlerDemoApp
 */
angular.module('uiErrorHandlerDemoApp')
  .config(function ($provide, HEADER_NAME, GENERIC_ERROR_HANDLING) {
  	// --- Decorate $http to add a special header by default ---
    function addHeaderToConfig(config) {
        config = config || {};
        config.headers = config.headers || {};

        // Add the header unless user asked to handle errors himself
        if (GENERIC_ERROR_HANDLING) {
            config.headers[HEADER_NAME] = true;
        }

        return config;
    }

    $provide.decorator('$http', ['$delegate', function ($delegate) {
      
      function decorateRegularCall(method) {
            return function(url, config) {
                return $delegate[method](url, addHeaderToConfig(config));
            };
        }

        function decorateDataCall(method) {
            return function(url, data, config) {
                return $delegate[method](url, data, addHeaderToConfig(config));
            };
        }

        function copyNotOverriddenAttributes(newHttp) {
            for (var attr in $delegate) {
                if (!newHttp.hasOwnProperty(attr)) {
                    if (typeof($delegate[attr]) === 'function') {
                        newHttp[attr] = function() {
                            return $delegate[attr].apply($delegate, arguments);
                        };
                    } else {
                        newHttp[attr] = $delegate[attr];
                    }
                }
            }
        }

        var newHttp = function(config) {
            return $delegate(addHeaderToConfig(config));
        };

        newHttp.get = decorateRegularCall('get');
        newHttp.delete = decorateRegularCall('delete');
        newHttp.head = decorateRegularCall('head');
        newHttp.jsonp = decorateRegularCall('jsonp');
        newHttp.post = decorateDataCall('post');
        newHttp.put = decorateDataCall('put');

        copyNotOverriddenAttributes(newHttp);

        return newHttp;

    }]);
  });
