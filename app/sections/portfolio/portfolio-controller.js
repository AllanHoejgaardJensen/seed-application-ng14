angular.module('seed.portfolio.fusion')
    .controller('FusionPortfolioController', function (FusionPortfolioService) {
        'use strict';
        var vm = this;
        vm.portfolio = FusionPortfolioService.getPortfolio();
    });