import {Object,AppRouter,Renderer,Behaviors} from 'mn';
import Backbone from 'bb';
import Layout from '../views/layout.js';
import Router from './router.js';
import ra from 'ra';
import behaviorsContainer from './behaviors.js';

export default Object.extend({
	initialize(){
		this.router = new (AppRouter.extend(Router))();
		this.layout = new Layout();
		this.layout.render();
		ra.on('route', 'default', this.triggerRoute);
		$('body').on('click', 'a[href^="#"]', (e)=> {
			e.preventDefault();
			this.triggerRoute(e.currentTarget.hash.replace('#', ''));
		});
		Behaviors.behaviorsLookup = behaviorsContainer;
		Renderer.render = (template, data)=> _.template(template)(data);
		Backbone.history.start();
	},
	triggerRoute(fragment){
		let c = this.router.appRoutes[fragment];
		this.router.navigate(fragment);
		this.router.controller[c]();
	}
}, {
	run(){
		new this();
	}
});