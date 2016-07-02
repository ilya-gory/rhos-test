import {LayoutView} from 'mn';
import tpl from '../templates/contacts.html';
import ContactsList from './contacts/list.js';
import {Collection} from '../models/contacts.js';

export default LayoutView.extend({
	template: tpl,
	regions:  {
		list:    '.contact-petitions',
		decided: '.decided-contact'
	},
	onRender(){
		(new Collection()).fetch({
			success: c=> this.showChildView('list', new ContactsList({collection: c}))
		});
	}
});