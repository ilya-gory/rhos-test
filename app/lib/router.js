import ra from 'ra';

import IndexView from '../views/index.js';
import ContactsView from '../views/contacts.js';
import ApiView from '../views/api.js';
import {Collection as GenresCollection} from '../models/genres.js';

/**
 * Main app router
 */
export default {
	appRoutes:  {
		'':       'index',
		contacts: 'contacts',
		api:      'api'
	},
	controller: {
		/**
		 * index page action
		 */
		index(){
			ra.trigger('layout', 'render', new IndexView());
		},
		/**
		 * "Part 1" page action
		 */
		contacts(){
			ra.trigger('layout', 'render', new ContactsView());
		},
		/**
		 * "Part 2" page action
		 */
		api(){
			ra.trigger('layout', 'render', new ApiView({
				// collection of genres to sync with backend
				collection: new GenresCollection([], {
					// authorization bearer token to use in request header
					authToken: 'client'
				}),
				// collection of user picked genres
				userGenres: new GenresCollection()
			}));
		}
	}
}