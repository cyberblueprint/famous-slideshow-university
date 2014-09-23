define(function(require, exports, module) {
	var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

    var SlideshowView = require('view/SlideshowView');

    var ImageSurface = require('famous/surfaces/ImageSurface');

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {
        data: undefined,
        cameraWidth: 0.6 * window.innerHeight
    };

    AppView.DEFAULT_OPTIONS.slideWidth = 0.8 * AppView.DEFAULT_OPTIONS.cameraWidth;
    AppView.DEFAULT_OPTIONS.slideHeight = AppView.DEFAULT_OPTIONS.slideWidth + 40;
    AppView.DEFAULT_OPTIONS.slidePosition = 0.77 * AppView.DEFAULT_OPTIONS.cameraWidth;

    function AppView(options) {
        View.apply(this, arguments);

        var slideshow = new SlideshowView({
            data: this.options.data
        });

        this.add(slideshow);
        _createCamera.call(this);
    }

    function _createCamera() {
        var camera = new ImageSurface({
            size: [this.options.cameraWidth, true],
            content: 'img/camera.png',
            properties: {
                width: '100%'
            }
        });

        var cameraModifier = new StateModifier({
            origin: [0.5, 0],
            align: [0.5, 0],
            transform: Transform.behind
        });

        this.add(cameraModifier).add(camera);
    }

    module.exports = AppView;
});