import {LayoutView} from 'mn';
import tpl from '../templates/contacts.html';
import ContactsList from './contacts/list.js';
import {Collection} from '../models/contacts.js';
import DecidedContact from './contacts/decided.js';

export default LayoutView.extend({
	template: tpl,
	regions:  {
		list:    '.contact-petitions',
		decided: '.decided-contact'
	},
	/**
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
	 * @param {Boolean} state -- true for show; false for hide
	 * @private
	 */
	_toggleList(state){
		this.getRegion('list').$el.toggleClass('hidden', !state);
	},
	onChildviewDecide(){
		this._toggleList(false);
	},
	/**
	 * @param {Marionette.ItemView} actor
	 */
	onChildviewItemAccept(actor){
		this._showDecided(actor.model, true);
	},
	/**
	 * @param {Marionette.ItemView} actor
	 */
	onChildviewItemDecline(actor){
		this._showDecided(actor.model, false);
	},
	onChildviewActionBack(){
		this.getRegion('decided').empty();
		this._toggleList(true);
	},
	onRender(){
		(new Collection()).fetch({
			success: c=> this.showChildView('list', new ContactsList({collection: c}))
		});
	}
});