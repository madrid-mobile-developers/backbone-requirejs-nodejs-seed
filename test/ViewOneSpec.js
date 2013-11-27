define([
    'jquery',
    'jquery-mobile',
    'utils',
    'views/StationsList'
],
    function ($, jmobile, utils, Stations) {
    describe('Stations List', function () {
        //Setup ajax requests
        utils.initAjaxSetup();
        //Configure Error Handler
        utils.initAjaxErrorSetup();
        beforeEach(function () {
            this.view = new Stations();
            $('body').remove('#viewContainer');
            $("body").append('<div id="viewContainer"></div>');
        });
        it('Fetching with the correct url', function () {
            this.view.render();
            expect(this.view.model.url).toBe('https://irail.p.mashape.com/NMBS/Stations.json');
        });

        it("Render show the list of stations", function() {

            var flag;
            runs(function() {
                flag = false;
                //When the promise is resolved we activate the flag
                this.view.render().done(function(){
                    flag = true;
                });
            });


            waitsFor(function() {
                return flag;
            }, "The list should be rendered", 10000);


            runs(function() {
                //Check if there are items rendered
                expect($('#viewContainer .ui-listview li').length).toNotBe(0);
            });
        });


        it("Splice function", function(){
            var model = new (Backbone.Model.extend())();
            var stationsList = [];
            for(var i=0;i<100;i++){
                stationsList.push({'name': i});
            }
            model.set({
                'Stations':  stationsList

            });
            var result = this.view.spliceStations(model);
            //Check the object Stations
            expect(result['Stations']).toBeDefined();
            //Check the length of stations array
            expect(result['Stations'].length).toBe(15);
            //Check every object in stations array
            for(var i=0; i<result['Stations'].length; i++){
                expect(result['Stations'][i]['name']).toBe(i);
            }
        });






    })
});