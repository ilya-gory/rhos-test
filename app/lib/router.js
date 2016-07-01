import ra from 'ra';
import IndexView from '../views/index.js';

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
			console.log('colview');
		},
		colid(id){
			console.log('colid');
		},
		api(){
			console.log('api');
		}
	}
}