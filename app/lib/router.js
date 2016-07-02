import ra from 'ra';

import IndexView from '../views/index.js';
import ContactsView from '../views/contacts.js';
import ApiView from '../views/api.js';
import {Collection as GenresCollection} from '../models/genres.js';

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
			ra.trigger('layout', 'render', new ApiView({collection: new GenresCollection([], {authToken: 'client'})}));
		}
	}
}