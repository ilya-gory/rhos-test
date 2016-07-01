import {Model as bModel,Collection as bCollection} from 'bb';

export const Model = bModel.extend({
	defaults: {
		id:       null,
		name:     null,
		location: null
	}
});

export const Collection = bCollection.extend({
	model: Model,
	url:   '/app/data/contacts.json'
});