import {CompositeView} from 'mn';
import ContactView from './list/item.js';
import tpl from '../../templates/contacts/list.html';

export default CompositeView.extend({
	childViewContainer: '.contact-list',
	childView:          ContactView,
	template:           tpl,
	options:            {
		count:  0,
		loaded: 0
	},
	onChildviewItemPending(){
		this.options.count++;
	},
	onChildviewItemLoaded(){
		this.options.loaded++;
		if (this.options.count == this.options.loaded) {
			alert('Pending contacts collection view is rendered and shown');
		}
	},
	onRender(){
		console.log(`There's ${this.getOption('count')} contacts pending!`);
	}
});