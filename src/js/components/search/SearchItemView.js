var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');


var SearchItemView = Backbone.View.extend({

    tagName: 'li',
    
    template: _.template(require('./SearchItemView.html')),

    events: {
        'click .single-hero': 'toSingleHero',
        'click .to-the-battle': 'toBattle'
    },

    initialize: function () {
        this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model));
    },

    toBattle: function () {
        console.log('click Event in Search SearchItemView');
        window.location.hash = ('battleSetup/' + this.model.get('id'));
    },

    toSingleHero: function () {
        window.location.hash = ('singleHero/' + this.model.get('id'));
    }

});

module.exports = SearchItemView;