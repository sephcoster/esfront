/* global moment:false */
(function() {
  'use strict';

  angular
    .module('esfront')
    .constant('searchConfig', searchConfig)
    .constant('moment', moment);

  function searchConfig(){
    var options = {};

    options.esLocation = 'http://52.2.78.193:9200/';
    options.default_return_size = 25;
    options.fields = [
      { name: 'Organization',
        field: 'OrganizationName',
        role: 'title'
      },
      { name: 'Grade',
        field: 'Grade',
        role: 'subtitle'
      },
      { name: 'Location',
        field: 'Location',
        role: 'title'
      },
      { name: 'Job Summary',
        field: 'JobSummary',
        role: 'description'
      } 
    ];
    options.aggregations =[
      { name: 'Organization',
        field: 'OrganizationName'
      },
      { name: 'Grade',
        field: 'Grade'
      },
      { name: 'Location',
        field: 'Location'
      },        
    ];
    options.aggregation_size = 5;

    return options;
  }

})();
