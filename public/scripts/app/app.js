
define([
    'angular',
	'angularLocalStorage',
    'angularRoute',
    'homeCtrl',
    'profileCtrl',
    'loginCtrl',
    'FactoryServices',
    'Util',
    'ngTouch'

    

], function (angular) {
    'use strict';

    var mainApp =  angular.module('mainApp', [
        'ngRoute',
		'LocalStorageModule',
        'homeCtrl',
        'profileCtrl',
        'loginCtrl',
        'FactoryServices',
        'Util',
        'ngTouch'

		
    ]);

    
    mainApp.config(['$httpProvider',function ($httpProvider) {
    }]);


    mainApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'partials/auth/home.html',
                controller: 'homeCtrl',
                access: { requiredLogin: false }
            }).
            when('/profile', {
                templateUrl: 'partials/auth/profile.html',
                controller: 'profileCtrl',
                access: { requiredLogin: false }
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl',
                access: { requiredLogin: false }
            }).
                otherwise({
                    redirectTo: '/login'
                });
        }



    ]);


    mainApp.run(['$rootScope','$location',function($rootScope, $location) {
         $rootScope.app = {
                name: 'DotFresh',
                description: 'Powered by DotFresh',
                year: ((new Date()).getFullYear()),
              };
    }]);

    return mainApp;


});




