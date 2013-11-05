/**
 * Created by jarias on 05/11/13.
 * Implements the Backbone view one
 */
define('views/ViewOne',
    [
        'underscore',
        'Backbone',
        'models/ModelOne',
        'text!/app/partials/partial1.html'
    ],
    function(_, Backbone, ModelOne, tpl){
        var View = Backbone.View.extend({
            el: '#viewContainer',
            initialize: function(){
                this.model = new ModelOne();
            },
            render: function(){
                //This will be a fetch but in the seed we'll fill it with static data
                this.model.set({'key1': 'value1', 'key2':'value2', 'key3':'value3'});
                //Include in DOM the template
                this.$el.html(_.template(tpl, this.model.toJSON()))
            }
        });
        return View;
    });