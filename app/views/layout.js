import {LayoutView} from 'mn';
import ra from 'ra';

export default LayoutView.extend({
	template: false,
	el:       'body',
	regions:  {
		main: '#main'
	},
	initialize(){
		ra.channel('layout').on('render', view=> this.showChildView('main', view));
	}
});