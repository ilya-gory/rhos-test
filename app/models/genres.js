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
		options.url = `${collection.url}/${options.query}`;
		sync.apply(this, arguments);
	},
	constructor(models, options){
		this.authToken = options.authToken;
		delete options.authToken;
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