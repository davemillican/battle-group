var $ = require('jquery');
var Backbone = require('backbone');

var SingleHeroModel = require('./SingleHeroModel');

var SingleHeroFullView = Backbone.View.extend({

    className: "Single-Hero",

    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'battleSetup/' + 
                                this.model.get('id');
    },

    initialize: function () {
        var button = $('<button>');
        this.img = $('<img>');

        this.listenTo(this.model, 'sync', this.render);

        button.html('Send To Battle');
        this.$el.append(button); 
        this.$el.append(this.img);
    },

    render: function () {
        console.log('Single Hero Render');
        console.log(this.model.get('thumbnail'));
        this.img.attr('src', (this.model.get('thumbnail')));

    }
});

module.exports = SingleHeroFullView;