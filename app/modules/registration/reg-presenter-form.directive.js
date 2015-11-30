(function() {
  'use strict';

  angular
    .module('cpApp.registration')
    .directive('registerPresenterForm', presenterForm);


  function presenterForm() {
    var directive = {

      templateUrl: 'modules/registration/reg-presenter-form.directive.html',
      restrict: 'E',
      controller: PresenterFormController,
      controllerAs: 'presenterFormCtrl'
    };
    return directive;
  }

  PresenterFormController.$inject = ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog'];
  function PresenterFormController($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
    /*jshint validthis: true */
    $scope.presenter = {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      dob: '',
      gender: ''
    }
  }
})();




