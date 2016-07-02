import {CompositeView} from 'mn';
import ContactView from './list/item.js';
import tpl from '../../templates/contacts/list.html';

export default CompositeView.extend({
	childViewContainer: '.contact-list',
	childView:          ContactView,
	template:           tpl,
	options:            {
		count: 0
	},
	onChildviewItemPending(){
		this.options.count++;
	},
	onRender(){
		console.log(`There's ${this.getOption('count')} contacts pending!`);
	},
	onDomRefresh(){
		//alert('Pending contacts collection view is rendered and shown');
	}
});