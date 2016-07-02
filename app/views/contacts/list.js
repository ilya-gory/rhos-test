import {CompositeView} from 'mn';
import ContactView from './list/item.js';
import tpl from '../../templates/contacts/list.html';

/**
 * Contact list
 */
export default CompositeView.extend({
	childViewContainer: '.contact-list',
	childView:          ContactView,
	template:           tpl,
	options:            {
		// contacts pending counter
		count:  0,
		// contacts that fully loaded (user pic loaded) counter
		loaded: 0
	},
	/**
	 * count contacts pending
	 */
	onChildviewItemPending(){
		this.options.count++;
	},
	/**
	 * count fully loaded contacts & show alert when ready
	 */
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