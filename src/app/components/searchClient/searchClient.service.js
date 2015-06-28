/* global window:true */
// Service
//
// esFactory() creates a configured client instance. Turn that instance
// into a service so that it can be required by other parts of the application

(function() {
  'use strict';
  angular
    .module('esfront')
    .service('searchClient', searchClient);

  /** @ngInject */
  function searchClient (esFactory){
    var esLocation = 'http://fd5c719ffba9c4b8d3d52762bec6910a.us-east-1.aws.found.io:9200/';
    return esFactory({
      host: esLocation,
      apiVersion: '1.5',
      log: 'trace'
    });
  }
    
})();