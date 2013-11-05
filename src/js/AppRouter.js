/**
 * Created by jarias on 04/11/13.
 */
define('AppRouter', [
    'Backbone',
    'views/ViewOne',
    'views/ViewTwo'
], function(Backbone, ViewOne, ViewTwo){
    var Router = Backbone.Router.extend({
        //Indicates the urls to navigate
        routes:{
            '':'goViewOne',
            'viewOne':'goViewOne',
            'viewTwo':'goViewTwo'
        },
        goViewOne : function(){
            if(typeof this.viewOne === "undefined"){
                //Hold a reference of the view in router to be able to release memory
                this.viewOne = new ViewOne();
            }
            this.viewOne.render();
        },
        goViewTwo : function(){
            if(typeof this.viewTwo === "undefined"){
                //Hold a reference of the view in router to be able to release memory
                this.viewTwo = new ViewTwo();
            }
            this.viewTwo.render();
        }
    });
    return Router;
});