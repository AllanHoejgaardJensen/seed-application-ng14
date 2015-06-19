(function () {
    'use strict';
    angular.module('seed.portfolio.fusion', ['ngRoute', 'seed.components.portfolio'])
        .config(function ($routeProvider) {
            $routeProvider.when('/portfolio', {
                templateUrl: 'sections/portfolio/portfolio.html',
                controller: 'FusionPortfolioController',
                controllerAs: 'vm'
            });
        });
}());
