import {ItemView} from 'mn';
import tpl from '../../templates/api/genre.html';

export default ItemView.extend({
	template:   tpl,
	tagName:    'li',
	attributes: {
		'class': 'list-group-item'
	}
});