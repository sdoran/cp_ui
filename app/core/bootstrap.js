/*jshint browser:true */
'use strict';

require('./vendor')();
// load the main app file
var appModule = require('../app');
// replaces ng-app="appName"
angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});