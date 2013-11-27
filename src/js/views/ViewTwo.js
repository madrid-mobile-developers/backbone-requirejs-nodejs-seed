/**
 * Created by jarias on 05/11/13.
 * Implements the Backbone view two
 */
define('views/ViewTwo',
    [
        'underscore',
        'Backbone',
        'models/ModelTwo',
        'text!../../partials/partial2.html'
    ],
    function(_, Backbone, ModelTwo, tpl){
        var View = Backbone.View.extend({
            el: '#viewContainer',
            initialize: function(){
                this.model = new ModelTwo();
            },
            render: function(){
                //This will be a fetch but in the seed we'll fill it with static data
                this.model.set({'key1': 'value4', 'key2':'value5', 'key3':'value6'});
                //Include in DOM the template
                this.$el.html(_.template(tpl, this.model.toJSON()));
            }
        });
        return View;
    });