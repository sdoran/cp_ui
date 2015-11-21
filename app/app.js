//module.exports = angular.module('cpApp', []);
//(function() {
//  'use strict';
//
//  angular
//    .module('cpApp', ['cpApp.home'])
//    .config(function ($mdThemingProvider, $mdIconProvider) {
//      $mdIconProvider
//        .defaultIconSet("./assets/svg/avatars.svg", 128)
//        .icon("menu", "./assets/svg/menu.svg", 24)
//        .icon("share", "./assets/svg/share.svg", 24)
//        .icon("google_plus", "./assets/svg/google_plus.svg", 512)
//        .icon("twitter", "./assets/svg/twitter.svg", 512)
//        .icon("phone", "./assets/svg/phone.svg", 512);
//      $mdThemingProvider.theme('default')
//        .primaryPalette('brown')
//        .accentPalette('red');
//    });
//
//})();

module.exports = angular.module('cpApp', [
  /* 3rd party */
  //'lumx',
  /* modules */
  require('./core/layout').name
]);