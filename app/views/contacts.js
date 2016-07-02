import {LayoutView} from 'mn';
import tpl from '../templates/contacts.html';
import ContactsList from './contacts/list.js';
import {Collection} from '../models/contacts.js';
import DecidedContact from './contacts/decided.js';

/**
 * View for Contact petitions (Part 1)
 */
export default LayoutView.extend({
	template: tpl,
	regions:  {
		// region for contact list
		list:    '.contact-petitions',
		// region for display accepted/declined contact
		decided: '.decided-contact'
	},
	/**
	 * Show accepted/declined contact & hide contact list
	 * @param {Backbone.Model} m
	 * @param {Boolean} state -- accept or decline
	 * @private
	 */
	_showDecided(m, state){
		let m_ = m.clone();
		m_.set('state', state === true ? 'accept' : 'decline');
		m.collection.remove(m);
		m = undefined;
		this.showChildView('decided', new DecidedContact({model: m_}));
	},
	/**
	 * Toggle visibility of contact list
	 * @param {Boolean} state -- true for show; false for hide
	 * @private
	 */
	_toggleList(state){
		this.getRegion('list').$el.toggleClass('hidden', !state);
	},
	/**
	 * Handle accepted/declined contact's view render event
	 */
	onChildviewDecide(){
		this._toggleList(false);
	},
	/**
	 * Handle click accept on contact list item
	 * @param {Marionette.ItemView} actor
	 */
	onChildviewItemAccept(actor){
		this._showDecided(actor.model, true);
	},
	/**
	 * Handle click accept on contact list item
	 * @param {Marionette.ItemView} actor
	 */
	onChildviewItemDecline(actor){
		this._showDecided(actor.model, false);
	},
	/**
	 * Handle "Back to contact list" click: hide decided contact & show contact list
	 */
	onChildviewActionBack(){
		this.getRegion('decided').empty();
		this._toggleList(true);
	},
	onRender(){
		// fetch contacts & show list
		(new Collection()).fetch({
			success: c=> this.showChildView('list', new ContactsList({collection: c}))
		});
	}
});