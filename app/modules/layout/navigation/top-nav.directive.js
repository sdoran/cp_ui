'use strict';
  angular
    .module('CpApp.layout')
    .directive('CpTopNav', topNav);

  function topNav() {
    var directive = {
      link: link,
      templateUrl: 'top-nav.directive.html',
      restrict: 'E'
    };
    return directive;
  };