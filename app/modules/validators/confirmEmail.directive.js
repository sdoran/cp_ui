(function() {
  'use strict';

  angular
    .module('cpApp.validators')
    .directive('confirmEmail', confirmEmail);

  function confirmEmail() {
    var directive = {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, elem, attr, ngModelCtrl) {

        var emailToMatch = $parse(attr.confirmEmail);
        var emailFn = $interpolate(attr.confirmEmail)($scope);

        $scope.$watch(emailFn, function(newVal) {
          ngModelCtrl.$setValidity('email', ngModelCtrl.$viewValue == newVal);
        });

        ngModelCtrl.$validators.email = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return value == emailToMatch($scope);
        };

      }
    };
    return directive;
  }
})();