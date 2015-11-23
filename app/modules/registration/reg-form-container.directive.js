(function() {
  'use strict';

  angular
    .module('cpApp.registration')
    .directive('regFormContainer', formContainer);


  function formContainer() {
    var directive = {

      templateUrl: 'modules/registration/reg-form-container.directive.html',
      restrict: 'E',
      controller: FormContainerController,
      controllerAs: 'formContainerCtrl'
    };
    return directive;
  }

  //Handle all the logic switching between tabs
  FormContainerController.$inject = ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog'];
  function FormContainerController($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
    /*jshint validthis: true */
    var vm = this;

  }
})();




