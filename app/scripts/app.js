'use strict';

angular
  .module('myOrderApp', ['ionic']);

var PhoneGapInit = function () {
  this.boot = function () {
    angular.bootstrap(document, ['myOrderApp']);
  };

  if (window.phonegap !== undefined) {
    document.addEventListener('deviceready', function() {
      this.boot();
    });
  } else {
    console.log('PhoneGap not found, booting Angular manually');
    this.boot();
  }
};

angular.element(document).ready(function() {
  new PhoneGapInit();
});
