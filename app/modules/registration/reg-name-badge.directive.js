(function() {
  'use strict';

  angular
    .module('cpApp.registration')
    .directive('registerNameBadge', nameBadge);


  function nameBadge() {
    var directive = {

      templateUrl: 'modules/registration/reg-name-badge.directive.html',
      restrict: 'E',
      controller: NameBadgeController,
      controllerAs: 'nameBadgeCtrl'
    };
    return directive;
  }

  NameBadgeController.$inject = ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog'];
  function NameBadgeController($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
    /*jshint validthis: true */
    var vm = this;

  }
})();




