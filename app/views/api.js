import {CompositeView} from 'mn';
import tpl from '../templates/api.html';
import GenreView from './api/genre.js';

/**
 * Timeout for query input in ms
 * @type {number}
 */
const KEYUP_TIMEOUT = 2000;
/**
 * Timer for query input
 * @type {number|null}
 */
let keyupTimer = null;

export default CompositeView.extend({
	template:           tpl,
	ui:                 {
		query:     '#query',
		noResults: '.no-results',
		results:   '.search-results'
	},
	triggers:           {
		'keyup': 'search'
	},
	childViewContainer: '.api-results-list',
	childView:          GenreView,
	collectionEvents:   {
		sync: 'onCollectionSync'
	},
	/**
	 *
	 * @param {boolean} state -- true show results; false results no found
	 * @private
	 */
	_toggleResults(state){
		this.ui.results.toggleClass('hidden', !state);
		this.ui.noResults.toggleClass('hidden', state);
	},
	onCollectionSync(){
		this._toggleResults(!!this.collection.length);
	},
	onSearch(){
		if (keyupTimer != null) return;
		keyupTimer = setTimeout(()=> {
			let q = this.ui.query.val();
			this.collection.fetch({
				query: encodeURIComponent(q)
			});
			keyupTimer = null;
		}, KEYUP_TIMEOUT);
	}
});