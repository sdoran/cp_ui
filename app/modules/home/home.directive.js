(function() {
  'use strict';

  angular
    .module('cpApp.home')
    .directive('homeView', homeView);

  function homeView() {
    var directive = {

      templateUrl: 'modules/home/home.directive.html',
      restrict: 'E'
    };
    return directive;
  }
})();