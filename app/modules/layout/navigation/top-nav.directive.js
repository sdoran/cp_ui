(function() {
  'use strict';

  angular
    .module('cpApp.topNav')
    .directive('CpTopNav', topNav);

  function topNav() {
    var directive = {
      link: link,
      templateUrl: 'top-nav.directive.html',
      restrict: 'E'
    };
    return directive;
  }
})();