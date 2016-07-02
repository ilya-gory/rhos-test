import {ItemView} from 'mn';
import tpl from '../../../templates/contacts/list/item.html';

/**
 * Contact item view
 */
export default ItemView.extend({
	template:   tpl,
	attributes: {
		'class': 'col-md-6 col-xs-6'
	},
	behaviors:  {
		dataUi: {}
	},
	onRender(){
		this.triggerMethod('item:pending');
	},
	/**
	 * Wait for image loaded after the view done & trigger fully loaded event
	 */
	onDomRefresh(){
		this.$('img').on('load', ()=> {
			this.triggerMethod('item:loaded');
		});
	},
	/**
	 * Accept click handler
	 */
	onActionAccept(){
		this.triggerMethod('item:accept');
	},
	/**
	 * Decline click handler
	 */
	onActionDecline(){
		this.triggerMethod('item:decline');
	}
});