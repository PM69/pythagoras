angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};



  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };


  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}).controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

  document.addEventListener("deviceready", function () {
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        alert(barcodeData.text);
        console.log("Barcode Format -> " + barcodeData.format);
        console.log("Cancelled -> " + barcodeData.cancelled);
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });
    };

    // NOTE: encoding not functioning yet



  }, false);
}) .controller('Controller', ['$scope', function ($scope) {
                  var vm = this;
                    vm.options = {
                        width: 2,
                        height: 100,
                        quite: 10,
                        displayValue: true,
                        font: "monospace",
                        textAlign: "center",
                        fontSize: 12,
                        backgroundColor: "",
                        lineColor: "#000"
                    };
                    var barcodes = [
                        {
                            type: "ean",
                            code: "0029000018068"
                        }
                    ];
                    vm.mycode = {};
                    vm.mycode.type = "ean";
                    vm.mycode.code = "0029000018068";
                    var i = 0;
                    setInterval(
                            function () {
                                if (i < barcodes.length) {
                                    vm.mycode.type = barcodes[i].type;
                                    vm.mycode.code = barcodes[i].code;
                                    i++;
                                } else {
                                    i = 0;
                                }
                                $scope.$apply();
                            },
                            1000);
                }]);
