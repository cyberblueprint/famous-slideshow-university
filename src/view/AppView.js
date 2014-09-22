define(function(require, exports, module) {
	var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

    var SlideshowView = require('view/SlideshowView');

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        data: undefined
    };

    function AppView(options) {
        View.apply(this, arguments);

        var slideshow = new SlideshowView({
            data: this.options.data
        });

        this.add(slideshow);
    }

    module.exports = AppView;
});