import {ItemView} from 'mn';
import tpl from '../../../templates/contacts/list/item.html';

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
	onActionAccept(){

	},
	onActionDecline(){

	}
});