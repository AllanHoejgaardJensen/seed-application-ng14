angular.module('components.navigation', [])

    /**
     * Controller to handle the navbar.
     */
    .controller('NavigationController', function ($scope) {
        'use strict';
        var vm = this,
            on = $scope.$on('$routeChangeSuccess', function () {
                vm.navbar = true;
            });

        vm.navbar = true;

    });
