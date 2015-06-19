describe('seed', function () {
    'use strict';

    describe('Portfolio', function () {

        beforeEach(function () {
            browser.get('/#!/portfolio');
        });


        it('should render portfolio when user navigates to /portfolio', function () {
            expect(element.all(by.css('header-dual')).first().getText())
                .toMatch(/Portfolio/);
        });

    });

});
