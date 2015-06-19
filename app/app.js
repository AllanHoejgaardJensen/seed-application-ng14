// Declare app level module which depends on views, and components

(function () {
    "use strict";

    angular.module('seed', [
        'components.navigation',
        'ngRoute',
        'picardy.fontawesome',
        'seed.portfolio.fusion',
        'ui.bootstrap'])

        .config(config)

        .config(providers);

    function config($routeProvider) {
        $routeProvider
            .when('/welcome', {
                templateUrl: 'welcome.html',
                title: 'Welcome to BEC/Nykredit seed',
                initial: true
            })
            .otherwise({redirectTo: '/welcome'});
    }

    function providers($locationProvider, $compileProvider) {
        $locationProvider.hashPrefix('!');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|tel|mailto|x-wmapp0|chrome-extension):/);
    }

}) ();
