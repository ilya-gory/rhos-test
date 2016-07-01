import {Object,AppRouter} from 'mn';
import Backbone from 'bb';
import Layout from '../views/layout.js';
import Router from './router.js';

export default Object.extend({
	initialize(){
		this.router = new (AppRouter.extend(Router))();
		this.layout = new Layout();
		this.layout.render();
		Backbone.history.start();
	}
}, {
	run(){
		new this();
	}
});