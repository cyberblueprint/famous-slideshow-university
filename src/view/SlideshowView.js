define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var SlideView = require('view/SlideView');

    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;

    SlideshowView.DEFAULT_OPTIONS = {

    };

    function SlideshowView(options) {
        View.apply(this, arguments);

        var slide = new SlideView();

        this.add(slide);
    }

    module.exports = SlideshowView;
});