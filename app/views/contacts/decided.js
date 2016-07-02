import {ItemView} from 'mn';
import tpl from '../../templates/contacts/decided.html';

/**
 * View that displays when user click accept/decline at contact
 */
export default ItemView.extend({
	behaviors: {
		dataUi: {}
	},
	template:  tpl,
	onRender(){
		// tell that decided contact are showed
		this.triggerMethod('decide');
	}
});