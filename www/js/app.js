// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','barcode' ])  // module einfügen
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.an', {
      url: '/an',
      views: {
        'menuContent': {
          templateUrl: 'templates/an.html'
        }
      }
    })

    .state('app.ge', {
        url: '/ge',
        views: {
          'menuContent': {
            templateUrl: 'templates/ge.html'
          }
        }
      })
      .state('app.rb', {
          url: '/rb',
          views: {
            'menuContent': {
              templateUrl: 'templates/rb.html'
            }
          }
        })
    .state('app.ue', {
      url: '/ue',
      views: {
        'menuContent': {
          templateUrl: 'templates/ue.html'

        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/ue');
});
