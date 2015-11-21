(function() {
  'use strict';

  angular
    .module('cpApp.topNav')
    .directive('cpTopNav', topNav);

  function topNav() {
    var directive = {

      templateUrl: 'modules/layout/navigation/top-nav.directive.html',
      restrict: 'E'
    };
    return directive;
  }
})();