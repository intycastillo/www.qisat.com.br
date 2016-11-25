(function() {
  'use strict';

  angular
    .module('QiSatApp')
    .config([ '$httpProvider', '$locationProvider', '$routeProvider',
          function ( $httpProvider, $locationProvider, $routeProvider ) {
          
            $locationProvider.html5Mode(true);    

            $routeProvider.when('/aluno/perfil', {
              templateUrl : '/views/aluno-perfil.html', 
              isAuth : true,
              controller: 'perfilController',
              resolve : {
                Authenticated : function(authService){
                      return authService.isAuth() || 
                              authService.verifyAuth().then(function (res){ return (res.data.success) || false }, function (res){ return false });
                  }
              }
            });

            $routeProvider.when('/aluno/certificados', {
              templateUrl : '/views/aluno-certificados.html', 
              isAuth : true,
              controller: 'userController',
              resolve : {
                Authenticated : function(authService){
                      return authService.isAuth() || 
                              authService.verifyAuth().then(function (res){ return (res.data.success) || false }, function (res){ return false });
                  }
              }
            });

            $routeProvider.when('/aluno/cursos', {
              templateUrl : '/views/aluno-cursos.html', 
              isAuth : true,
              controller: 'userController',
              resolve : {
                Authenticated : function(authService){
                      return authService.isAuth() || 
                              authService.verifyAuth().then(function (res){ return (res.data.success) || false }, function (res){ return false });
                  }
              }
            });

            $routeProvider.when('/aluno/financeiro', {
              templateUrl : '/views/aluno-financeiro.html',
              isAuth : true,
              controller: 'userController',
              resolve : {
                Authenticated : function(authService){
                      return authService.isAuth() || 
                              authService.verifyAuth().then(function (res){ return (res.data.success) || false }, function (res){ return false });
                  }
              }
            });

            $routeProvider.when('/aluno/desempenho', {
              templateUrl : '/views/aluno-desempenho.html', 
              isAuth : true,
              controller: 'userController',
              resolve : {
                Authenticated : function(authService){
                      return authService.isAuth() || 
                              authService.verifyAuth().then(function (res){ return (res.data.success) || false }, function (res){ return false });
                  }
              }
            });

            $routeProvider.when('/cadastro', {
              templateUrl : '/views/cadastro.html',
              controller : 'singupController',
              isAuth : false
            });

            $routeProvider.when('/lembrete-de-senha', {
              templateUrl : '/views/lembrete-de-senha.html',
              controller : 'rememberController',
              isAuth : false
            });

            $routeProvider.when('/login', {
              templateUrl : '/views/login.html',
              controller: 'loginController',
              isAuth : false
            });

            $routeProvider.otherwise('/login');
    }]);
})();