import {ItemView} from 'mn';
import tpl from '../../templates/api/genre.html';

export default ItemView.extend({
	template:    tpl,
	tagName:     'li',
	behaviors:   {
		dataUi: {}
	},
	attributes:  {
		'class': 'list-group-item'
	},
	modelEvents: {
		'change:userAdded': 'render'
	},
	serializeData(){
		let d = ItemView.prototype.serializeData.apply(this);
		if (_.isUndefined(d.userAdded)) d.userAdded = null;
		return d;
	}
});