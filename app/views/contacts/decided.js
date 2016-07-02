import {ItemView} from 'mn';
import tpl from '../../templates/contacts/decided.html';

export default ItemView.extend({
	behaviors: {
		dataUi: {}
	},
	template:  tpl,
	onRender(){
		this.triggerMethod('decide');
	}
});