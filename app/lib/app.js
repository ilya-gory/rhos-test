import {Object,AppRouter,Renderer} from 'mn';
import Backbone from 'bb';
import Layout from '../views/layout.js';
import Router from './router.js';
import ra from 'ra';

export default Object.extend({
	initialize(){
		this.router = new (AppRouter.extend(Router))();
		this.layout = new Layout();
		this.layout.render();
		ra.on('route', 'default', this.triggerRoute);
		Renderer.render = (template, data)=> {
			return _.template(template)(data);
		};
		Backbone.history.start();
	},
	triggerRoute(fragment){
		let c = this.router.appRoutes[fragment];
		this.router.controller[c]();
	}
}, {
	run(){
		new this();
	}
});