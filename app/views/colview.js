import {CollectionView,ItemView} from 'mn';
import contactViewTpl from '../templates/colview/item.html';

const ContactView = ItemView.extend({
	template:  contactViewTpl,
	behaviors: {
		dataUi: {}
	},
	onRender(){
		this.triggerMethod('item:pending');
	},
	onActionAccept(){
		
	},
	onActionDecline(){

	}
});

export default CollectionView.extend({
	childView: ContactView,
	options:   {
		count: 0
	},
	onChildviewItemPending(){
		this.options.count++;
	},
	onRender(){
		console.log(`There's ${this.getOption('count')} contacts pending!`);
	},
	onDomRefresh(){
		//alert('Pending contacts collection view is rendered and shown');
	}
});