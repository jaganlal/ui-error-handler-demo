'use strict';

/**
 * @ngdoc function
 * @name uiErrorHandlerDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiErrorHandlerDemoApp
 */
angular.module('uiErrorHandlerDemoApp')
  .controller('ContactCtrl', ['$http', 'HEADER_NAME', function ($http, HEADER_NAME) {

  	this.name = '';
  	this.ready = false;
  	this.config = {};
  	this.config[HEADER_NAME] = true;

  	this.getContacts = function() {
  		var me = this;
  		$http.get('http://localhost:3000/contacts', this.config).then(
  			function(response) {
		    	if(response && response.data) {
		    		console.log("Data is "+JSON.stringify(response.data));
		    		me.name = response.data[0].name;
		    		me.ready = true;
		    	}
		    }, function(err) {
		    	console.log("error");
		    });
  	}
  }]);
