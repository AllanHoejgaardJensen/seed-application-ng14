(function () {
    'use strict';
    angular.module('seed.portfolio.fusion')
        .controller('FusionPortfolioController', function (FusionPortfolioService) {
            var vm = this;
            vm.portfolio = FusionPortfolioService.getPortfolio();
        });
}());