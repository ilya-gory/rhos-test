import {Collection as bCollection,Model as bModel,sync} from 'bb';

export const Model = bModel.extend({
	defaults: {
		id:     null,
		parent: null
	}
});
export const Collection = bCollection.extend({
	model:     Model,
	authToken: null,
	url:       'http://alpha.core.soundframework.com/api/0/rest/json/genre/find/query',
	sync(mode, collection, options){
		if (!this.authToken) return; // user's genres collection is read-only
		if (_.isEmpty(options.query)) return; // restrict empty requests
		options.url = `${collection.url}/${options.query}`;
		sync.apply(this, arguments);
	},
	constructor(models, options){
		if (options && options.authToken) {
			this.authToken = options.authToken;
			delete options.authToken;
		}
		bCollection.apply(this, arguments);
	},
	fetch(options){
		options.beforeSend = xhr=> {
			xhr.setRequestHeader('Authorization', `bearer ${this.authToken}`);
		};
		return bCollection.prototype.fetch.apply(this, arguments);
	},
	parse(raw){
		return _.get(raw, 'rhos.genre');
	}
});