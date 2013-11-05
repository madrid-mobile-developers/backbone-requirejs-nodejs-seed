define(['app', 'angular','angularMocks'], function(app, angular,angularMocks) {

    describe('Testing Controller definition1', function() {

    	beforeEach(angular.mock.module('myApp'));

		beforeEach(angular.mock.inject(function($rootScope, $controller) {
		    this.scope = $rootScope.$new();
		    $controller('MyCtrl1', {
		      $scope: this.scope
		    });
		}));

        it('Works for app', function() {
           
        });

        it('Testing Controller methods', function() {
            
        });


    });

});
