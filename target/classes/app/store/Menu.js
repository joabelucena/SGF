Ext.define('Sam.store.Menu', {
	extend: 'Ext.data.Store',
	
	requires: ['Sam.model.MenuRoot'],
	
	model: 'Sam.model.MenuRoot',
	
	autoLoad: true,
	autoSync: true,
	
	proxy: {
		type: 'ajax',
		url: 'menu/load',
		
		reader: {
			type: 'json',
			root: 'items'
		}
	}
});