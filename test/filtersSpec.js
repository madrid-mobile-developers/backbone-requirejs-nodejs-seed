define(['app','controllers/myctrl2', 'angular','angularMocks'], function(app,myctrl2, angular,angularMocks) {

    describe('Testing Filters definition', function() {

    	beforeEach(angular.mock.module('myApp'));

        it('Should have a interpolate filter', inject(function($filter) {
            expect($filter('interpolate')).not.toEqual(null);
        }));

        it('Interpolate implementation', inject(function($filter) {
             var interpolate = $filter('interpolate')('aa');
              expect(interpolate).toEqual('aa');
        }));
          

    });

});
