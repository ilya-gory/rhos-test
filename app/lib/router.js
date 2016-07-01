import ra from 'ra';
import IndexView from '../views/index.js';

import ColView from '../views/colview.js';
import {Collection as Contacts} from '../models/contacts.js';

export default {
	appRoutes:  {
		'':            'index',
		colview:       'colview',
		'colview/:id': 'colid',
		api:           'api'
	},
	controller: {
		index(){
			ra.trigger('layout', 'render', new IndexView());
		},
		colview(){
			(new Contacts()).fetch({
				success(c){
					ra.trigger('layout', 'render', new ColView({collection: c}));
				}
			});
		},
		colid(id){
			console.log('colid');
		},
		api(){
			console.log('api');
		}
	}
}