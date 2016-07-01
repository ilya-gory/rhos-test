export default {
	appRoutes:  {
		colview:       'colview',
		'colview/:id': 'colid',
		api:           'api'
	},
	controller: {
		colview(){
			console.log('ready');
		},
		colid(id){
		},
		api(){

		}
	}
}