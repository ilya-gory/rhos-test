import {Object,AppRouter,Renderer,Behaviors} from 'mn';
import Backbone from 'bb';
import Layout from '../views/layout.js';
import Router from './router.js';
import ra from 'ra';
import behaviorsContainer from './behaviors.js';

/**
 * Application
 */
export default Object.extend({
	initialize(){
		this.router = new (AppRouter.extend(Router))();
		this.layout = new Layout();
		this.layout.render();
		// listen for routes
		ra.on('route', 'default', this.triggerRoute);
		// catch a[href#bla-bla] & trigger route for it
		$('body').on('click', 'a[href^="#"]', (e)=> {
			e.preventDefault();
			this.triggerRoute(e.currentTarget.hash.replace('#', ''));
		});
		Behaviors.behaviorsLookup = behaviorsContainer;
		// underscore _.template is used as a template render engine
		Renderer.render = (template, data)=> _.template(template)(data);
		// run router
		Backbone.history.start();
	},
	/**
	 * Execute controller's action for the given route fragment
	 * @param {string} fragment -- fragment without leading #-symbol
	 */
	triggerRoute(fragment){
		let c = this.router.appRoutes[fragment];
		this.router.navigate(fragment);
		this.router.controller[c]();
	}
}, {
	/**
	 * Run the application
	 * @static
	 */
	run(){
		new this();
	}
});