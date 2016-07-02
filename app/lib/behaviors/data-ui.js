import {Behavior} from 'mn';

/**
 * Behavior that catches clicks on elements with `data-ui` attribute.
 * It triggers action:`data-ui value` on the view
 */
export default Behavior.extend({
	ui:     {
		action: '[data-ui]'
	},
	events: {
		'click @ui.action': 'onAction'
	},
	onAction(e){
		let ds = e.currentTarget.dataset || {};
		this.view.triggerMethod(`action:${ds.ui}`, _.omit(ds, 'action'));
	}
});