import ra from 'ra';

import IndexView from '../views/index.js';
import ContactsView from '../views/contacts.js';

export default {
	appRoutes:  {
		'':       'index',
		contacts: 'contacts',
		api:      'api'
	},
	controller: {
		index(){
			ra.trigger('layout', 'render', new IndexView());
		},
		contacts(){
			ra.trigger('layout', 'render', new ContactsView());
		},
		api(){
			console.log('api');
		}
	}
}