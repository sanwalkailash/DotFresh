require.config({
    baseUrl: 'scripts/lib',
    paths :{
        'app' : '../app/app',
        'angular' :'angular/angular.min',
        'angularRoute' : 'angular-route/angular-route.min',
        'jquery' : 'jquery/dist/jquery.min',	
		'angularLocalStorage' : 'angular-local-storage/dist/angular-local-storage.min',		
        'bootstrap' : 'bootstrap/dist/js/bootstrap.min',
        'homeCtrl':'../app/homeCtrl'
        
    },
    shim: {
        
        'angular': {
            exports: 'angular'
        },
        'angularRoute' :{
            deps: ['angular'],
            exports : 'angularRoute'
        },
		'angularLocalStorage' :{
            deps: ['angular'],
            exports : 'angularLocalStorage'
        },
       
    }
});


require(['require','angular','angularRoute','angularLocalStorage','app'], function () {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['mainApp']);
    });
});