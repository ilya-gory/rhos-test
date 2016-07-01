import {Behavior} from 'mn';

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