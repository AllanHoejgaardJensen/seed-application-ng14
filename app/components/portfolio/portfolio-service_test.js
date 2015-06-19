describe('Portfolio Component', function () {

    'use strict';

    var FusionPortfolioService;

    beforeEach(function () {
        module('seed.components.portfolio');
        inject(function (_FusionPortfolioService_) {
            FusionPortfolioService = _FusionPortfolioService_;
        });
    });

    describe('Portfolio Service', function () {
        it('should return portfolio', function () {
            var portfolio  = FusionPortfolioService.getPortfolio();
            expect(portfolio.length).toBe(8);
            expect(portfolio).toContain({name: 'Kids', balance: 200348.76, type: 'ca', remark: 'Closed saving Account for kids'});
            expect(portfolio).toContain({name: 'Savings', balance:  220454.54, type: 'sa', remark: 'Family Savings'});
        });
    });

});
