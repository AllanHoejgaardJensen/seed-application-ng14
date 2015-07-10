angular.module('seed.portfolio.fusion', ['ngRoute', 'seed.components.portfolio'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/portfolio', {
            templateUrl: 'sections/portfolio/portfolio.html',
            controller: 'FusionPortfolioController',
            controllerAs: 'vm'
        });
    });
