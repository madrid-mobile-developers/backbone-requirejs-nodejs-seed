define(['app','controllers/myctrl2', 'angular','angularMocks'], function(app,myctrl2, angular,angularMocks) {

    describe('Testing Controller definition', function() {

    	beforeEach(angular.mock.module('myApp'));

		beforeEach(angular.mock.inject(function($rootScope, $controller) {
		    this.scope = $rootScope.$new();
		    $controller('MyCtrl2', {
		      $scope: this.scope
		    });
		}));

        it('Works for app', function() {
        	 console.log(JSON.stringify(myctrl2));
             expect(myctrl2).not.toEqual(null);
        });

        it('Testing Controller methods', function() {
             expect(myctrl2[0]).toEqual("$scope");
             expect(myctrl2[1]).toEqual("$http");
        });


    });

});
