import {Model as bModel,Collection as bCollection} from 'bb';

/**
 * Contact model
 */
export const Model = bModel.extend({
	defaults: {
		id:       null,
		name:     null,
		location: null,
		userpic:  null
	}
});
/**
 * Contacts collection
 */
export const Collection = bCollection.extend({
	model: Model,
	// uses json file as a data storage
	url:   '/app/data/contacts.json'
});