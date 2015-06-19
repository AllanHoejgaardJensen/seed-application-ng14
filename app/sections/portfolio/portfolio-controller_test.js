describe('portfolio module', function () {
    'use strict';
    beforeEach(module('seed.portfolio.fusion'));

    describe('fusion portfolio controller', function () {
        it('should load portfolio', function ($controller) {
            var FusionPortfolioController = $controller('FusionPortfolioController');
            expect(FusionPortfolioController.portfolio).toBeDefined();
        });

    });
});
