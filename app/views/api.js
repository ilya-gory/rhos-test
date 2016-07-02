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

/**
 * View for Api (Part 2)
 */
export default CompositeView.extend({
	template:           tpl,
	attributes:         {
		'class': 'genres-widget'
	},
	ui:                 {
		// query input
		query:     '#query',
		// no results container
		noResults: '.no-results',
		// query results container (holds list)
		results:   '.search-results'
	},
	triggers:           {
		'keyup': 'search'
	},
	childViewContainer: '.api-results-list>ul',
	childView:          GenreView,
	childViewOptions(model){
		return {
			userAdded: this.getOption('userGenres').contains(model)
		}
	},
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
		// show "No results" if no items found for the query
		this._toggleResults(!!this.collection.length);
	},
	onSearch(){
		// delay query to wait for a user to finish input his query 
		if (keyupTimer != null) return;
		keyupTimer = setTimeout(()=> {
			let q = this.ui.query.val();
			// query!
			this.collection.fetch({
				query: encodeURIComponent(q)
			});
			keyupTimer = null;
		}, KEYUP_TIMEOUT);
	},
	/**
	 * Handler for add/remove to/from user-pick genres
	 * @param {Marionette.ItemView} view -- genre view
	 * @param {Object} dataset -- genre selector dataset
	 */
	onChildviewActionGenreAdd(view, dataset){
		let ug = this.getOption('userGenres');
		if (!ug.contains(view.model)) {
			ug.add(view.model);
			view.model.set('userAdded', true);
		} else {
			ug.remove(view.model);
			view.model.unset('userAdded');
		}
	}
});