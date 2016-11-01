require.config({
    baseUrl: 'scripts/lib',
    paths :{
        'app' : '../app/app',
        'angular' :'angular/angular.min',
        'angularRoute' : 'angular-route/angular-route.min',
        'jquery' : 'jquery/dist/jquery.min',	
		'angularLocalStorage' : 'angular-local-storage/dist/angular-local-storage.min',		
        'bootstrap' : 'bootstrap/dist/js/bootstrap.min',
        'homeCtrl':'../app/homeCtrl',
        'profileCtrl':'../app/profileCtrl',
        'loginCtrl':'../app/loginCtrl',
        'FactoryServices':'../app/services/FactoryServices',
        'Util':'../app/services/Util',
        'ngTouch':'ngTouch/ngTouch'

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
		'ngTouch' :{
            deps: ['angular'],
            exports : 'ngTouch'
        },
       
    }
});


require(['require','angular','angularRoute','angularLocalStorage','ngTouch','app',], function () {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['mainApp']);
    });
});