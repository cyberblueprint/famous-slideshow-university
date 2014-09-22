define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');
	var AppView = require('view/AppView');

	var mainContext = Engine.createContext();


	var appview = new AppView();

	mainContext.add(appview);
});