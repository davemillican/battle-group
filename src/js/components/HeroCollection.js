var Backbone = require ('backbone');

var HeroCollection = Backbone.Collection.extend ({


    url: function () {
        var marvelKey = 'apikey=cd80e84f4acc3f0d2cdabd391244ab24';

        var listOf20 = 'limit=20';

        console.log ('in URL function');
        console.log (this.searchString);


        return 'http://gateway.marvel.com/v1/public/characters?'
                 + listOf20
                 + '&'
                 + marvelKey;

    },

    parse: function (obj) {
        console.log('in parse');
        for (var x=0;x<obj.data.results.length;x++) {
            console.log(obj.data.results[x].thumbnail.path);
        };
    }

});

module.exports = HeroCollection;