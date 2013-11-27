define([
    'jquery',
    'views/ViewOne'
],
    function ($, ViewOne) {
    describe('View One', function () {
        beforeEach(function () {
            this.view = new ViewOne();
            $('body').remove('#viewContainer');
            $("body").append('<div id="viewContainer"></div>');
        });
        it('Exists render', function () {
            expect(this.view.render).toBeDefined();
            expect(typeof this.view.render).toBe('function');
        });

        it("Render show the list", function() {
            this.view.render();

            expect($("#viewContainer ul li").length).toBe(3);
        });

    })
});